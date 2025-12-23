import React from 'react'
import { motion } from 'framer-motion'

interface RewardUnlockProps {
  amount: string
  type: 'cashback' | 'points' | 'reward'
  delay?: number
}

/**
 * RewardUnlockAnimation
 * Displays animated reward unlock with icon, amount, and type
 * Used in hero section and throughout the site
 */
const RewardUnlockAnimation: React.FC<RewardUnlockProps> = ({ 
  amount, 
  type = 'cashback', 
  delay = 0 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'cashback': 
        return '💰'
      case 'points': 
        return '✨'
      case 'reward': 
        return '🎁'
      default: 
        return '💳'
    }
  }

  const getColor = () => {
    switch (type) {
      case 'cashback':
        return 'text-trovo-green'
      case 'points':
        return 'text-trovo-gold'
      case 'reward':
        return 'text-success-glow'
      default:
        return 'text-trovo-green'
    }
  }

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay, 
        duration: 0.6, 
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
    >
      {/* Icon with pulse animation */}
      <motion.span
        className="text-4xl shrink-0"
        animate={{ 
          rotate: [0, 10, -10, 0], 
          scale: [1, 1.2, 1.2, 1] 
        }}
        transition={{ 
          delay, 
          duration: 2, 
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      >
        {getIcon()}
      </motion.span>

      {/* Text content */}
      <div>
        <p className="text-xs sm:text-sm text-gray-400 capitalize font-medium">
          {type === 'cashback' ? 'Cashback' : type === 'points' ? 'Points' : 'Reward'}
        </p>
        <p className={`text-xl sm:text-2xl font-bold ${getColor()}`}>
          {amount}
        </p>
      </div>
    </motion.div>
  )
}

export default RewardUnlockAnimation
