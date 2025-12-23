import React, { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      {children}
    </div>
  )
}

interface CardSwapProps {
  children: ReactNode[]
  delay?: number
  pauseOnHover?: boolean
  activeIndex?: number
  onCardChange?: (index: number) => void
}

const CardSwap: React.FC<CardSwapProps> = ({
  children,
  delay = 5000,
  pauseOnHover = false,
  activeIndex: externalActiveIndex,
  onCardChange
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex
  const cards = React.Children.toArray(children)

  useEffect(() => {
    if (externalActiveIndex === undefined && !isPaused) {
      const interval = setInterval(() => {
        setInternalActiveIndex((prev) => (prev + 1) % cards.length)
      }, delay)
      return () => clearInterval(interval)
    }
  }, [cards.length, delay, isPaused, externalActiveIndex])

  useEffect(() => {
    if (onCardChange && externalActiveIndex === undefined) {
      onCardChange(internalActiveIndex)
    }
  }, [internalActiveIndex, onCardChange, externalActiveIndex])

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        {cards.map((card, index) => {
          if (index !== activeIndex) return null
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95,
                y: -10
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              className="absolute inset-0"
            >
              {card}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default CardSwap
