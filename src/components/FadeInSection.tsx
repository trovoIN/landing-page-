import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = ''
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "-50px 0px" 
  })

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 30, x: 0 }
      case 'down': return { y: -30, x: 0 }
      case 'left': return { y: 0, x: 30 }
      case 'right': return { y: 0, x: -30 }
      default: return { y: 30, x: 0 }
    }
  }

  const offset = getDirectionOffset()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...offset,
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1 
      } : {}}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
