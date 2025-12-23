import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LaunchCountdown: React.FC = () => {
  // Set launch date to 3 months from now (fake but realistic)
  const launchDate = new Date('2025-11-23T00:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span>Launching Soon</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trovo Beta Launch Countdown
          </h2>
          
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            We're putting the finishing touches on your financial revolution. 
            Join the waitlist to be among the first users!
          </p>

          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-trovo-green mb-2"
                  key={unit.value} // This will trigger re-animation on value change
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-trovo-green text-white font-bold px-8 py-4 rounded-full hover:bg-trovo-green-dark transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.assign('/join')}
            >
              Get Early Access
            </motion.button>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">👥</span>
              <span className="text-sm">A growing community is waiting</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LaunchCountdown
