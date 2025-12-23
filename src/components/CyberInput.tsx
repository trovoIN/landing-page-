import { motion } from 'framer-motion'
import { useState, forwardRef, type InputHTMLAttributes } from 'react'

interface CyberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string
    type?: 'email' | 'tel' | 'text'
    error?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CyberInput = forwardRef<HTMLInputElement, CyberInputProps>(
    ({ label, type = 'text', error, value, onChange, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false)

        return (
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                >
                    {/* Label */}
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        {label}
                    </label>

                    {/* Input Container */}
                    <div className="relative">
                        <input
                            ref={ref}
                            type={type}
                            value={value}
                            onChange={onChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`
                w-full px-4 py-3 md:px-5 md:py-4
                bg-night-900/50 backdrop-blur-sm
                border-2 transition-all duration-300
                rounded-xl
                text-white font-mono text-base
                placeholder:text-gray-600
                focus:outline-none
                ${error
                                    ? 'border-red-500/50 focus:border-red-500'
                                    : isFocused
                                        ? 'border-trovo-green focus:border-trovo-green'
                                        : 'border-white/10 hover:border-white/20'
                                }
                ${isFocused && !error ? 'shadow-[0_0_20px_rgba(29,185,84,0.15)]' : ''}
              `}
                            {...props}
                        />

                        {/* Cursor effect when empty and focused */}
                        {isFocused && !value && (
                            <motion.div
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-5 bg-trovo-green"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                        )}

                        {/* Glitch particles on focus */}
                        {isFocused && !error && (
                            <>
                                <motion.div
                                    className="absolute -top-1 -left-1 w-2 h-2 bg-trovo-green/50 rounded-full blur-sm"
                                    animate={{
                                        x: [-2, 2, -2],
                                        y: [-2, 2, -2],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute -bottom-1 -right-1 w-2 h-2 bg-trovo-green/50 rounded-full blur-sm"
                                    animate={{
                                        x: [2, -2, 2],
                                        y: [2, -2, 2],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                />
                            </>
                        )}
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-400 font-mono"
                        >
                            {error}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        )
    }
)

CyberInput.displayName = 'CyberInput'

export default CyberInput
