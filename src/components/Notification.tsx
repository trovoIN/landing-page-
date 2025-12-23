import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NotificationProps {
  isVisible: boolean
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message: string
  onClose: () => void
  duration?: number
}

const Notification: React.FC<NotificationProps> = ({
  isVisible,
  type,
  title,
  message,
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 border-green-200',
          icon: '✅',
          iconBg: 'bg-green-100',
          text: 'text-green-800',
          title: 'text-green-900'
        }
      case 'error':
        return {
          bg: 'bg-red-50 border-red-200',
          icon: '❌',
          iconBg: 'bg-red-100',
          text: 'text-red-800',
          title: 'text-red-900'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-50 border-yellow-200',
          icon: '⚠️',
          iconBg: 'bg-yellow-100',
          text: 'text-yellow-800',
          title: 'text-yellow-900'
        }
      case 'info':
      default:
        return {
          bg: 'bg-blue-50 border-blue-200',
          icon: 'ℹ️',
          iconBg: 'bg-blue-100',
          text: 'text-blue-800',
          title: 'text-blue-900'
        }
    }
  }

  const styles = getTypeStyles()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-50 max-w-sm w-full"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className={`${styles.bg} border rounded-xl p-4 shadow-lg backdrop-blur-sm`}>
            <div className="flex items-start space-x-3">
              <div className={`${styles.iconBg} rounded-full p-1 flex-shrink-0`}>
                <span className="text-sm">{styles.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`${styles.title} font-semibold text-sm mb-1`}>
                  {title}
                </h4>
                <p className={`${styles.text} text-sm leading-relaxed`}>
                  {message}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>
            
            {/* Progress bar */}
            {duration > 0 && (
              <motion.div
                className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full bg-trovo-green rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: duration / 1000, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
