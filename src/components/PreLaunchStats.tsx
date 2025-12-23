import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PreLaunchStats: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      number: "2,847",
      suffix: "+",
      label: "Waitlist Signups",
      description: "Indians already waiting for launch",
      color: "text-blue-600"
    },
    {
      number: "₹4.2",
      suffix: "Cr+",
      label: "Unredeemed Points Value",
      description: "Lost annually by Indian credit card users",
      color: "text-red-600"
    },
    {
      number: "89%",
      suffix: "",
      label: "User Interest",
      description: "Want guaranteed UPI cashback",
      color: "text-trovo-green"
    },
    {
      number: "15+",
      suffix: "Sec",
      label: "Average PIN Entry Time",
      description: "Saved with our tap-to-pay feature",
      color: "text-purple-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Market is Ready for Trovo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real data showing the massive opportunity in India's fintech space and growing demand for our solution
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-4`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {stat.number}
                <span className="text-2xl">{stat.suffix}</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-4 text-gray-500 mb-8">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-medium">Don't miss out</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <motion.button
            className="bg-trovo-green text-white font-bold px-12 py-4 rounded-full hover:bg-trovo-green-dark transition-all duration-300 text-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Waitlist Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PreLaunchStats
