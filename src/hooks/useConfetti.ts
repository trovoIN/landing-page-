import { useEffect } from 'react'

interface ConfettiParticle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  rotation: number
  size: number
  color: string
}

export const useConfetti = () => {
  const triggerConfetti = (containerSelector?: string) => {
    const container = document.querySelector(containerSelector || 'body') as HTMLElement
    if (!container) return

    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const canvas = document.createElement('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '9999'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: ConfettiParticle[] = []
    const colors = ['#1DB954', '#61dca3', '#00ff88', '#00cc66', '#66ff99']

    // Create particles
    for (let i = 0; i < 80; i++) {
      const angle = (Math.random() * Math.PI * 2)
      const velocity = 4 + Math.random() * 8
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        life: 1,
        rotation: Math.random() * Math.PI * 2,
        size: 3 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= 0.015
        p.y += p.vy
        p.x += p.vx
        p.vy += 0.2 // gravity
        p.rotation += 0.1

        ctx.save()
        ctx.globalAlpha = p.life
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()

        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      }

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      } else {
        document.body.removeChild(canvas)
      }
    }

    animate()
  }

  return { triggerConfetti }
}
