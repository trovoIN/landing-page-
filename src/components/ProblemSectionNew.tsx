import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const problems = [
    {
      icon: "💳",
      title: "Wasted Credit Card Points",
      description: "Credit card points are confusing and often expire unused. Indians lose ₹1,200+ yearly on unredeemed rewards.",
      impact: "₹1,200+ lost annually"
    },
    {
      icon: "📱",
      title: "UPI Without Rewards",
      description: "UPI payments offer zero cashback while card payments do. Missing out on ₹1,500+ annual rewards on daily spending.",
      impact: "₹1,500+ missed rewards"
    },
    {
      icon: "👥",
      title: "Unsafe Card Sharing",
      description: "Friends ask to use your credit card for better rewards but sharing cards is risky and tracking payments is a nightmare.",
      impact: "Security risks daily"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-trovo-green-50">
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-gray-100/30 to-transparent animate-gradient-shift"></div>
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100/20 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-red-200/30 rounded-full blur-lg animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Problems We're Solving
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Indians are losing thousands of rupees annually due to fragmented financial tools and missed reward opportunities
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Problem indicator glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-6 text-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {problem.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-red-600 transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {problem.description}
                </p>
                
                {/* Impact Badge */}
                <motion.div 
                  className="inline-block bg-gradient-to-r from-red-100 to-orange-100 text-red-700 text-xs font-semibold px-4 py-2 rounded-full mx-auto block text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {problem.impact}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center space-x-4 text-gray-500 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200/50">
            <motion.div 
              className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.span 
              className="text-sm font-medium"
              animate={{ 
                color: ["#6B7280", "#1DB954", "#6B7280"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              But there's a better way
            </motion.span>
            <motion.div 
              className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
