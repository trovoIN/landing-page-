import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import GlitchText from './GlitchText'

type FrustrationOption = 'fees' | 'speed' | 'support' | 'privacy'

interface PersonalitySelectorProps {
    onSelect?: (selection: FrustrationOption) => void
}

const options = [
    {
        id: 'fees' as FrustrationOption,
        icon: '💸',
        title: 'Hidden Fees',
        description: 'Unexpected charges',
        response: 'Hidden fees reduce real value over time. Trovo delivers complete transparency.',
    },
    {
        id: 'speed' as FrustrationOption,
        icon: '🐌',
        title: 'Slow Transfers',
        description: 'Waiting for payments',
        response: 'Legacy systems create unnecessary delays. Trovo processes instantly.',
    },
    {
        id: 'support' as FrustrationOption,
        icon: '🤖',
        title: 'Robot Support',
        description: 'Automated responses',
        response: "Automated responses can't solve real problems. Trovo provides human support.",
    },
    {
        id: 'privacy' as FrustrationOption,
        icon: '🔒',
        title: 'Privacy Invasion',
        description: 'Data exploitation',
        response: 'Your data becomes their product. With Trovo, your privacy is protected.',
    },
]

const PersonalitySelector = ({ onSelect }: PersonalitySelectorProps) => {
    const [selected, setSelected] = useState<FrustrationOption | null>(null)
    const [showResponse, setShowResponse] = useState(false)

    const handleSelect = (option: FrustrationOption) => {
        setSelected(option)
        setTimeout(() => setShowResponse(true), 300)
        onSelect?.(option)
    }

    const selectedOption = options.find(opt => opt.id === selected)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full max-w-2xl mx-auto"
        >
            {/* Question */}
            <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    What frustrates you most about traditional banking?
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Help us understand your needs
                </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {options.map((option, index) => {
                    const isSelected = selected === option.id

                    return (
                        <motion.button
                            key={option.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => handleSelect(option.id)}
                            disabled={selected !== null}
                            className={`
                group relative p-6 rounded-xl border-2 transition-all duration-300
                text-left disabled:cursor-not-allowed
                ${isSelected
                                    ? 'border-trovo-green bg-trovo-green/10'
                                    : selected
                                        ? 'border-white/5 bg-white/5 opacity-40'
                                        : 'border-white/10 bg-white/5 hover:border-trovo-green/50 hover:bg-white/10'
                                }
              `}
                            aria-pressed={isSelected}
                            tabIndex={0}
                        >
                            {/* Glow effect on hover */}
                            {!selected && (
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-trovo-green/0 to-trovo-green/0 group-hover:from-trovo-green/5 group-hover:to-transparent transition-all duration-300" />
                            )}

                            <div className="relative flex items-start gap-4">
                                {/* Icon */}
                                <span className="text-3xl md:text-4xl" aria-hidden="true">
                                    {option.icon}
                                </span>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                        {option.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {option.description}
                                    </p>
                                </div>

                                {/* Selected indicator */}
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-6 h-6 bg-trovo-green rounded-full flex items-center justify-center"
                                    >
                                        <svg className="w-4 h-4 text-night-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                )}
                            </div>

                            {/* RGB split on hover (desktop only) */}
                            <style>{`
                @media (hover: hover) and (prefers-reduced-motion: no-preference) {
                  button:hover:not(:disabled) h3 {
                    text-shadow: 1px 0 #00fff9, -1px 0 #ff00de;
                  }
                }
              `}</style>
                        </motion.button>
                    )
                })}
            </div>

            {/* Response */}
            <AnimatePresence>
                {showResponse && selectedOption && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div className="backdrop-blur-md bg-trovo-green/10 border border-trovo-green/30 rounded-xl p-6 md:p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-trovo-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-trovo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-base md:text-lg text-white leading-relaxed">
                                        <GlitchText delay={0.2} duration={0.6}>
                                            {selectedOption.response}
                                        </GlitchText>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default PersonalitySelector
