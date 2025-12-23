import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Transaction {
  id: string
  user: string
  amount: string
  type: 'cashback' | 'reward'
  time: string
}

const mockTransactions: Transaction[] = [
  { id: '1', user: 'Priya M.', amount: '₹1,250', type: 'cashback', time: 'now' },
  { id: '2', user: 'Amit P.', amount: '₹2,100', type: 'reward', time: '2m ago' },
  { id: '3', user: 'Rahul K.', amount: '₹850', type: 'cashback', time: '5m ago' },
  { id: '4', user: 'Neha S.', amount: '₹3,500', type: 'reward', time: '8m ago' },
]

/**
 * RealTimeTransactionTicker
 * Shows live transaction stream with automatic updates
 * Creates social proof and FOMO effect
 */
const RealTimeTransactionTicker: React.FC = () => {
  const [displayTransactions, setDisplayTransactions] = useState<Transaction[]>(mockTransactions)

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        user: mockTransactions[Math.floor(Math.random() * mockTransactions.length)].user,
        amount: `₹${Math.floor(Math.random() * 3000) + 500}`,
        type: Math.random() > 0.5 ? 'cashback' : 'reward',
        time: 'now'
      }

      setDisplayTransactions(prev => {
        const updated = [newTransaction, ...prev.slice(0, 3)]
        return updated
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getTypeColor = (type: string) => {
    return type === 'cashback' ? 'text-trovo-green' : 'text-trovo-gold'
  }

  const getTypeIcon = (type: string) => {
    return type === 'cashback' ? '💰' : '✨'
  }

  return (
    <div className="relative rounded-2xl border border-trovo-green/20 bg-gradient-to-br from-night-800/40 to-night-900/60 p-6 md:p-8 backdrop-blur-xl overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-radial from-trovo-green/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Header with live indicator */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Live Rewards</h3>
          <div className="flex items-center gap-2">
            <motion.span
              className="w-3 h-3 bg-trovo-green rounded-full shadow-lg shadow-trovo-green/50"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <span className="text-sm text-trovo-green font-semibold tracking-wide">LIVE</span>
          </div>
        </div>

        {/* Transaction list */}
        <div className="space-y-2">
          <AnimatePresence mode="wait">
            {displayTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                className="flex items-center justify-between p-4 rounded-xl bg-night-800/50 border border-white/5 hover:border-trovo-green/20 transition-colors"
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Left: User info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate">{tx.user}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{tx.time}</p>
                </div>

                {/* Right: Amount with type */}
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-lg">{getTypeIcon(tx.type)}</span>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${getTypeColor(tx.type)}`}>
                      {tx.amount}
                    </p>
                    <p className="text-xs text-gray-400 capitalize">
                      {tx.type === 'cashback' ? 'Cashback' : 'Reward'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Animated line at bottom */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-trovo-green/30 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Social proof text */}
        <p className="mt-4 text-xs text-gray-400 text-center">
          ✓ 10,000+ early adopters unlocking rewards right now
        </p>
      </div>
    </div>
  )
}

export default RealTimeTransactionTicker
