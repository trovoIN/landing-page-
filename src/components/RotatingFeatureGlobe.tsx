import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe } from '@/components/ui/globe'

interface Feature {
    id: string
    iconPath: string
    title: string
    description: string
    gradient: string
    orbitLabel: string
}

const features: Feature[] = [
    {
        id: 'instant',
        iconPath: '/lightning-bolt.svg',
        title: 'Instant',
        description: 'Money reaches you when earned, not weeks later.',
        gradient: 'from-trovo-green to-green-600',
        orbitLabel: 'Instant'
    },
    {
        id: 'virtual-cards',
        iconPath: '/12335.svg',
        title: 'Virtual Cards',
        description: 'Enable secure credit sharing while maintaining complete financial control.',
        gradient: 'from-amber-400 to-orange-600',
        orbitLabel: 'Virtual Cards'
    },
    {
        id: 'intelligent',
        iconPath: '/calculator.svg',
        title: 'Intelligent',
        description: 'Trovo observes how you spend and acts automatically.',
        gradient: 'from-cyan-400 to-blue-600',
        orbitLabel: 'Intelligent'
    },
    {
        id: 'everywhere',
        iconPath: '/money-bag.svg',
        title: 'Everywhere',
        description: 'Every rupee spent becomes an opportunity to earn.',
        gradient: 'from-purple-400 to-pink-600',
        orbitLabel: 'Everywhere'
    }
]

const RotatingFeatureGlobe: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Auto-rotation every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen w-full bg-gradient-to-br from-night-900 via-night-800 to-night-900 overflow-hidden py-12 md:py-20 px-4">
            {/* Enhanced Animated Background Effects */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-trovo-green/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-trovo-green/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trovo-green/10 border border-trovo-green/30 mb-6">
                        <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-trovo-green">
                            TROVO SYSTEM ORBIT
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Six features,<br />one living system.
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                        Not a list — a network. Your benefits orbit real Indian life: every bill, tap, split, and payment.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* LEFT SIDE - Feature Cards */}
                    <div className="relative z-10 space-y-6 order-2 lg:order-1">
                        {/* Feature Cards - Stacked with transparency */}
                        <div className="relative h-[350px] md:h-[400px]">
                            {features.map((feature, index) => {
                                const isActive = index === activeIndex
                                const isHovered = index === hoveredIndex
                                const shouldHighlight = isActive || isHovered

                                return (
                                    <motion.div
                                        key={feature.id}
                                        className="absolute inset-0 cursor-pointer"
                                        style={{
                                            zIndex: shouldHighlight ? 20 : 10 - index,
                                            opacity: shouldHighlight ? 1 : 0.15,
                                            transform: `translateY(${index * 6}px) scale(${shouldHighlight ? 1 : 0.96})`
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            className={`h-full backdrop-blur-sm rounded-2xl md:rounded-3xl border-2 p-6 md:p-8 transition-all duration-300 ${isActive
                                                ? 'bg-gradient-to-br from-night-800/90 to-night-900/90 border-trovo-green shadow-xl shadow-trovo-green/10'
                                                : 'bg-night-900/50 border-white/5'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4 md:gap-6">
                                                {/* SVG Icon */}
                                                <div
                                                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 ${isActive
                                                        ? 'bg-trovo-green/20 ring-2 ring-trovo-green/50'
                                                        : 'bg-white/5'
                                                        }`}
                                                >
                                                    <img
                                                        src={feature.iconPath}
                                                        alt={feature.title}
                                                        className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${isActive ? 'brightness-110 drop-shadow-lg' : 'opacity-70'
                                                            }`}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h3
                                                        className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 transition-colors ${isActive ? 'text-white' : 'text-gray-400'
                                                            }`}
                                                    >
                                                        {feature.title}
                                                    </h3>
                                                    <p
                                                        className={`text-sm md:text-base leading-relaxed transition-colors ${isActive ? 'text-gray-300' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {feature.description}
                                                    </p>
                                                </div>

                                                {/* Active Indicator */}
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="w-2 h-2 md:w-3 md:h-3 bg-trovo-green rounded-full mt-2"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${index === activeIndex
                                        ? 'w-8 md:w-12 h-2 md:h-3 bg-trovo-green'
                                        : 'w-2 md:w-3 h-2 md:h-3 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to feature ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - Globe with Enhanced Effects */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square mx-auto">
                            {/* Multi-layered Glow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-r from-trovo-green/20 via-transparent to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute inset-[10%] bg-gradient-to-br from-trovo-green/10 to-transparent rounded-full blur-2xl" />

                            {/* Rotating Gradient Ring */}
                            <motion.div
                                className="absolute inset-[5%] rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.3), transparent, rgba(6, 182, 212, 0.3), transparent)'
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Inner Orbit Ring with Pulse */}
                            <motion.div
                                className="absolute inset-[12%] rounded-full border border-trovo-green/30"
                                animate={{
                                    boxShadow: ['0 0 10px rgba(16, 185, 129, 0.2)', '0 0 20px rgba(16, 185, 129, 0.4)', '0 0 10px rgba(16, 185, 129, 0.2)']
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Outer Orbit Ring */}
                            <div className="absolute inset-[4%] rounded-full border border-white/10" />


                            {/* Floating Particles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-trovo-green/60 rounded-full"
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${20 + Math.random() * 60}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2
                                    }}
                                />
                            ))}

                            {/* Globe Container with Enhanced Lighting */}
                            <div className="absolute inset-[15%]">
                                <div className="relative h-full w-full">
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent rounded-full" />
                                    <Globe className="h-full w-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default RotatingFeatureGlobe
