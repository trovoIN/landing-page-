import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GlitchTextProps {
    children: string
    delay?: number
    duration?: number
    className?: string
    glitchOnHover?: boolean
}

const GlitchText = ({
    children,
    delay = 0,
    duration = 1.2,
    className = '',
    glitchOnHover = false
}: GlitchTextProps) => {
    const [displayText, setDisplayText] = useState('')
    const [isHovered, setIsHovered] = useState(false)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

    useEffect(() => {
        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            setDisplayText(children)
            return
        }

        setDisplayText('') // Start empty for better effect

        const timeout = setTimeout(() => {
            let iteration = 0
            const totalIterations = children.length

            const interval = setInterval(() => {
                setDisplayText(
                    children
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return children[index]
                            }
                            if (char === ' ') return ' '
                            return chars[Math.floor(Math.random() * chars.length)]
                        })
                        .join('')
                )

                iteration += 1 / 3

                if (iteration >= totalIterations + 1) {
                    clearInterval(interval)
                    setDisplayText(children)
                }
            }, 50) // 20fps for visible scramble

            return () => clearInterval(interval)
        }, delay * 1000)

        return () => clearTimeout(timeout)
    }, [children, delay, duration])

    return (
        <motion.span
            className={`inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay }}
            onMouseEnter={() => glitchOnHover && setIsHovered(true)}
            onMouseLeave={() => glitchOnHover && setIsHovered(false)}
            style={{
                textShadow: isHovered && glitchOnHover
                    ? '3px 0 #ff00de, -3px 0 #00fff9'
                    : 'none',
                transition: 'text-shadow 0.1s ease',
            }}
        >
            {displayText || children}
        </motion.span>
    )
}

export default GlitchText
