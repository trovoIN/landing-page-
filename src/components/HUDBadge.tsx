import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const HUDBadge = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="fixed top-8 right-8 md:top-12 md:right-12 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="256-bit encrypted badge"
        >
            <motion.div
                className="relative group cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Main Badge */}
                <div className="relative backdrop-blur-md bg-white/5 border border-trovo-green/30 rounded-2xl p-4 md:p-5 overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-trovo-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-2">
                        {/* Lock Icon */}
                        <svg
                            className="w-8 h-8 md:w-10 md:h-10 text-trovo-green"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>

                        {/* Text */}
                        <div className="text-center">
                            <div className="text-sm md:text-base font-bold text-white whitespace-nowrap">
                                256-bit Encrypted
                            </div>
                        </div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-trovo-green/50"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Hover Tooltip */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-4 right-0 w-64 backdrop-blur-md bg-night-900/95 border border-trovo-green/30 rounded-xl p-4 shadow-2xl"
                        >
                            <div className="text-sm text-gray-300 leading-relaxed">
                                <p className="text-trovo-green font-semibold mb-2">256-bit encrypted</p>
                                <p className="mb-2">Your email stays private and encrypted.</p>
                                <p className="text-gray-400">No selling. No spam.</p>
                            </div>

                            {/* Arrow */}
                            <div className="absolute -top-2 right-8 w-4 h-4 bg-night-900/95 border-l border-t border-trovo-green/30 transform rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default HUDBadge
