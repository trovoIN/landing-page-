import { motion } from 'framer-motion'

const GlitchParticles = () => {
    // Check for reduced motion
    const prefersReducedMotion = typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false

    if (prefersReducedMotion) return null

    // Generate particle data
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
    }))

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.08]" aria-hidden="true">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-trovo-green rounded-full blur-sm"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    animate={{
                        y: ['0vh', '-100vh'],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Add some code-like particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={`code-${i}`}
                    className="absolute text-trovo-green font-mono text-xs opacity-30 blur-[0.5px]"
                    style={{
                        left: `${Math.random() * 90 + 5}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: ['0vh', '100vh'],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: Math.random() * 25 + 20,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {['0x', '1', '0', '{}', '[]', '//'][Math.floor(Math.random() * 6)]}
                </motion.div>
            ))}
        </div>
    )
}

export default GlitchParticles
