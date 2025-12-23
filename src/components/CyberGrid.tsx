import { useEffect, useRef } from 'react'

const CyberGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // Set canvas size
        const setSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setSize()

        // Grid configuration
        const gridSize = 50
        const perspective = 500
        let offsetY = 0

        const drawGrid = (timestamp: number = 0) => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Create gradient for depth effect
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, 'rgba(29, 185, 84, 0)')
            gradient.addColorStop(0.5, 'rgba(29, 185, 84, 0.08)')
            gradient.addColorStop(1, 'rgba(29, 185, 84, 0)')

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1

            // Animate offset for movement
            if (!prefersReducedMotion) {
                offsetY = (timestamp * 0.02) % gridSize
            }

            // Draw horizontal lines with perspective
            const vanishingPointY = canvas.height * 0.3
            const startY = vanishingPointY
            const rows = Math.ceil((canvas.height - startY) / gridSize) + 2

            for (let i = 0; i < rows; i++) {
                const y = startY + i * gridSize - offsetY
                const depth = (y - vanishingPointY) / perspective
                const scale = Math.max(0.3, 1 - depth)

                const x1 = canvas.width / 2 - (canvas.width / 2) * scale
                const x2 = canvas.width / 2 + (canvas.width / 2) * scale

                const opacity = Math.max(0.1, 1 - Math.abs(depth) * 2)

                ctx.globalAlpha = opacity * 0.3 // Keep opacity < 12% total
                ctx.beginPath()
                ctx.moveTo(x1, y)
                ctx.lineTo(x2, y)
                ctx.stroke()
            }

            // Draw vertical lines
            const cols = 20
            for (let i = 0; i < cols; i++) {
                const x = (canvas.width / cols) * i

                ctx.globalAlpha = 0.2
                ctx.beginPath()
                ctx.moveTo(x, vanishingPointY)

                // Perspective curve
                const endY = canvas.height
                const vanishX = canvas.width / 2
                const endX = x + (vanishX - x) * 0.3

                ctx.lineTo(endX, endY)
                ctx.stroke()
            }

            ctx.globalAlpha = 1
        }

        // Animation loop
        let animationId: number

        const animate = (timestamp: number) => {
            drawGrid(timestamp)
            if (!prefersReducedMotion) {
                animationId = requestAnimationFrame(animate)
            }
        }

        if (prefersReducedMotion) {
            drawGrid()
        } else {
            animationId = requestAnimationFrame(animate)
        }

        // Handle resize
        const handleResize = () => {
            setSize()
            drawGrid()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-[0.12]"
            style={{
                filter: 'blur(1px)',
                mixBlendMode: 'screen',
            }}
            aria-hidden="true"
        />
    )
}

export default CyberGrid
