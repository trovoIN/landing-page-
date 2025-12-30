// Version: 2024-12-30-10:13 - Fixed random numbers issue
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LiveCounterProps {
    apiEndpoint?: string
    initialTotal?: number
    initialLast24h?: number
    useMock?: boolean
}

interface CounterData {
    totalJoined: number
    joinedLast24h: number
    timestamp?: string
}

// Get day-based count for last 24 hours
function getDayBasedCount() {
    const dayOfWeek = new Date().getDay() // 0=Sunday, 1=Monday, etc.
    const dayCounts: Record<number, number> = {
        0: 4,  // Sunday
        1: 5,  // Monday
        2: 10, // Tuesday
        3: 8,  // Wednesday
        4: 2,  // Thursday
        5: 9,  // Friday
        6: 10  // Saturday
    }
    return dayCounts[dayOfWeek] || 4
}

const LiveCounter = ({
    apiEndpoint,
    initialTotal = 3729,
    initialLast24h,
    useMock = false
}: LiveCounterProps) => {
    const [data, setData] = useState<CounterData>({
        totalJoined: initialTotal,
        joinedLast24h: initialLast24h ?? getDayBasedCount(),
    })

    useEffect(() => {
        if (!apiEndpoint && !useMock) return

        const fetchData = async () => {
            if (useMock) {
                // Use exact initial values without random numbers
                setData({
                    totalJoined: initialTotal,
                    joinedLast24h: initialLast24h || getDayBasedCount(),
                    timestamp: new Date().toISOString()
                })
                return
            }

            if (!apiEndpoint) return

            try {
                const response = await fetch(apiEndpoint)
                if (response.ok) {
                    const newData = await response.json()
                    setData({
                        totalJoined: newData.totalCount || newData.totalJoined || initialTotal,
                        joinedLast24h: newData.joinedLast24h || getDayBasedCount(),
                        timestamp: newData.timestamp
                    })
                }
            } catch (error) {
                console.warn('Failed to fetch live counter data, using fallback', error)
                // Fallback to initial values (NOT random numbers)
                setData({
                    totalJoined: initialTotal,
                    joinedLast24h: initialLast24h || getDayBasedCount(),
                    timestamp: new Date().toISOString()
                })
            }
        }

        fetchData()

        // Poll every 30 seconds for real-time updates
        const interval = setInterval(fetchData, 30000)

        // Listen for immediate refetch events (triggered after email submission)
        const handleRefetch = () => {
            fetchData()
        }
        window.addEventListener('refetch-count', handleRefetch)

        return () => {
            clearInterval(interval)
            window.removeEventListener('refetch-count', handleRefetch)
        }
    }, [apiEndpoint, initialTotal, initialLast24h, useMock])

    // Animated counter hook
    const useCountUp = (target: number, duration: number = 1000) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            if (prefersReducedMotion) {
                setCount(target)
                return
            }

            let startTime: number | null = null
            const startValue = count

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / duration, 1)

                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart)

                setCount(currentCount)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }, [target])

        return count
    }

    const animatedTotal = useCountUp(data.totalJoined)
    const animatedLast24h = useCountUp(data.joinedLast24h)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-2xl mx-auto"
            aria-live="polite"
        >
            <div className="backdrop-blur-md bg-white/5 border border-trovo-green/20 rounded-2xl p-6 md:p-8">
                {/* HUD Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-trovo-green rounded-full animate-pulse" aria-hidden="true" />
                    <h2 className="text-sm md:text-base font-mono text-gray-400 uppercase tracking-wider">
                        Live Network Status
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Total Joined */}
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={animatedTotal}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-4xl md:text-5xl font-bold text-white font-mono"
                                >
                                    {animatedTotal > 0 ? `${animatedTotal.toLocaleString()}+` : '—'}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <p className="text-sm md:text-base text-gray-400">
                            people joined
                        </p>
                    </div>

                    {/* Last 24 Hours */}
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={animatedLast24h}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-4xl md:text-5xl font-bold text-trovo-green font-mono"
                                >
                                    {animatedLast24h > 0 ? animatedLast24h.toLocaleString() : '—'}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <p className="text-sm md:text-base text-gray-400">
                            in the last 24 hours
                        </p>
                    </div>
                </div>

                {/* Timestamp */}
                {data.timestamp && (
                    <p className="mt-4 text-xs text-gray-500 font-mono">
                        Updated {new Date(data.timestamp).toLocaleTimeString()}
                    </p>
                )}

                {/* Visual separator */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-trovo-green/30 to-transparent" aria-hidden="true" />
            </div>
        </motion.div>
    )
}

export default LiveCounter
