import { useEffect, useRef } from 'react'

const isTouch = () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const CursorRipple: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const queueRef = useRef<Array<{x:number;y:number;t:number}>>([])

  useEffect(() => {
    if (isTouch() || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      return
    }
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.inset = '0'
    container.style.pointerEvents = 'none'
    container.style.zIndex = '60'
    document.body.appendChild(container)
    containerRef.current = container

    const onMove = (e: MouseEvent) => {
      queueRef.current.push({ x: e.clientX, y: e.clientY, t: performance.now() })
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      while (queueRef.current.length) {
        const p = queueRef.current.shift()!
        const dot = document.createElement('div')
        dot.style.position = 'absolute'
        dot.style.width = '16px'
        dot.style.height = '16px'
        dot.style.left = `${p.x - 8}px`
        dot.style.top = `${p.y - 8}px`
        dot.style.borderRadius = '9999px'
        dot.style.background = 'radial-gradient(circle, rgba(34,255,164,0.35) 0%, rgba(34,255,164,0.0) 65%)'
        dot.style.boxShadow = '0 0 10px rgba(34,255,164,0.18)'
        dot.style.transform = 'translateZ(0)'
        dot.style.willChange = 'transform, opacity'
        dot.style.opacity = '1'
        container.appendChild(dot)
        const anim = dot.animate([
          { transform: 'scale(0.55)', opacity: 0.8 },
          { transform: 'scale(2.1)', opacity: 0 }
        ], { duration: 700, easing: 'ease-out' })
        anim.onfinish = () => dot.remove()
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      container.remove()
    }
  }, [])

  return null
}

export default CursorRipple