import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EntrySequenceProps {
    onComplete?: () => void
}

const EntrySequence = ({ onComplete }: EntrySequenceProps) => {
    const [stage, setStage] = useState<'logo' | 'text' | 'complete'>('logo')
    const [hasPlayed, setHasPlayed] = useState(false)

    useEffect(() => {
        // Check if sequence has already played in this session
        const played = sessionStorage.getItem('trovo-entry-played')

        if (played) {
            setStage('complete')
            onComplete?.()
            setHasPlayed(true)
            return
        }

        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            sessionStorage.setItem('trovo-entry-played', 'true')
            setStage('complete')
            onComplete?.()
            setHasPlayed(true)
            return
        }

        // Stage 1: Show logo (0.7s)
        const logoTimer = setTimeout(() => {
            setStage('text')
        }, 700)

        // Stage 2: Show text (0.5s)
        const textTimer = setTimeout(() => {
            setStage('complete')
            sessionStorage.setItem('trovo-entry-played', 'true')
            onComplete?.()
        }, 1200)

        // Allow ESC key to skip
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                clearTimeout(logoTimer)
                clearTimeout(textTimer)
                sessionStorage.setItem('trovo-entry-played', 'true')
                setStage('complete')
                onComplete?.()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(logoTimer)
            clearTimeout(textTimer)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onComplete])

    // Don't render if already played
    if (hasPlayed || stage === 'complete') {
        return null
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    {/* Logo with glitch reveal */}
                    <AnimatePresence mode="wait">
                        {stage === 'logo' && (
                            <motion.div
                                key="logo"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <motion.img
                                    src="/trovo.svg"
                                    alt="Trovo"
                                    className="w-20 h-20 md:w-24 md:h-24 mx-auto"
                                    animate={{
                                        filter: [
                                            'hue-rotate(0deg)',
                                            'hue-rotate(5deg)',
                                            'hue-rotate(-5deg)',
                                            'hue-rotate(0deg)',
                                        ],
                                    }}
                                    transition={{ duration: 0.3, times: [0, 0.3, 0.6, 1] }}
                                />
                            </motion.div>
                        )}

                        {/* Text */}
                        {stage === 'text' && (
                            <motion.p
                                key="text"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-trovo-green font-mono text-sm md:text-base"
                            >
                                Initializing secure access…
                            </motion.p>
                        )}
                    </AnimatePresence>

                    {/* Skip hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-xs font-mono"
                    >
                        Press ESC to skip
                    </motion.p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default EntrySequence
