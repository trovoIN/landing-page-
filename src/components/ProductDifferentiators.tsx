import React from 'react'
import { motion } from 'framer-motion'

const ProductDifferentiators: React.FC = () => {

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100, damping: 20 },
    },
  }

  const features = [
    {
      id: 1,
      title: 'Intelligent Reward Engine',
      description:
        'Analyzes your spending patterns in real-time and recommends the best card for every transaction. Your rewards aren\'t left to chance.',
      svgPath: '12336.svg',
      color: 'from-[#42ffa1]',
      stat: 'Up to 5%+ cashback optimization',
    },
    {
      id: 2,
      title: 'Guaranteed UPI Cashback',
      description:
        'Flat 1% cashback on every UPI transaction, guaranteed. No conditions, no exclusions. Transfer your favorite payment mode into your highest reward source.',
      svgPath: '12335.svg',
      color: 'from-[#06B6D4]',
      stat: '1% on every payment',
    },
    {
      id: 3,
      title: 'Instant Settlement',
      description:
        'Money hits your bank account instantly, not 30 days later. See your rewards immediately and use them right away. Time value of money matters.',
      svgPath: '12337.svg',
      color: 'from-[#42ffa1]',
      stat: 'Real-time settlement',
    },
    {
      id: 4,
      title: 'Virtual Card Suite',
      description:
        'Create unlimited virtual cards with custom limits for online shopping, subscriptions, and one-time purchases. Pay differently for different merchants.',
      svgPath: '12338.svg',
      color: 'from-[#06B6D4]',
      stat: 'Unlimited virtual cards',
    },
    {
      id: 5,
      title: 'Shared Spending Made Simple',
      description:
        'Split bills, group expenses, and shared subscriptions in real-time. Everyone pays their fair share instantly. Transparent, automatic, fair.',
      svgPath: 'shared-spending.svg',
      color: 'from-[#42ffa1]',
      stat: 'Seamless bill splitting',
    },
    {
      id: 6,
      title: 'Cashback on Everything',
      description:
        'Not just cards. Get cashback on UPI payments, bill payments, subscriptions, and more. Every rupee you spend becomes an opportunity to earn.',
      svgPath: '12335.svg',
      color: 'from-[#06B6D4]',
      stat: 'Cashback across ecosystems',
    },
  ]

  return (
    <section className="relative bg-night-900 py-20 md:py-32 overflow-hidden">
      {/* Gradient background - Updated with Trovo colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-[#42ffa1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-[#42ffa1]/30 text-[#42ffa1] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Why Trovo
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
          >
            Built for Real Indian Needs
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Six core features that together create an intelligent financial platform. Each built around solving actual problems Indians face every day.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative h-full"
            >
              {/* Card background */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 group-hover:border-white/40 backdrop-blur-md transition-all duration-300">
                {/* Color-coded glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${feature.color}/20 to-transparent`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* SVG Icon */}
                  <div className="w-16 h-16 mb-6 transform group-hover:scale-110 transition-transform duration-300 rounded-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/${feature.svgPath}`} 
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Stat badge */}
                  <div className="flex items-center gap-2 pt-6 border-t border-white/10">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${feature.color}/20`}
                      style={{ color: feature.color === 'from-[#42ffa1]' ? '#42ffa1' : '#06B6D4' }}
                    >
                      ✓ {feature.stat}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison with alternatives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-black text-white mb-12 text-center"
          >
            The Trovo Difference
          </motion.h3>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 md:px-6 text-sm font-black text-gray-300 uppercase tracking-widest">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 md:px-6 text-sm font-black text-[#42ffa1] uppercase tracking-widest">
                    Trovo
                  </th>
                  <th className="text-center py-4 px-4 md:px-6 text-sm font-black text-gray-500 uppercase tracking-widest">
                    Traditional Banks
                  </th>
                  <th className="text-center py-4 px-4 md:px-6 text-sm font-black text-gray-500 uppercase tracking-widest">
                    Other Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Instant Cashback Settlement',
                    trovo: true,
                    banks: false,
                    others: false,
                  },
                  {
                    name: 'Guaranteed UPI Cashback',
                    trovo: true,
                    banks: false,
                    others: false,
                  },
                  {
                    name: 'Real-time Reward Optimization',
                    trovo: true,
                    banks: false,
                    others: false,
                  },
                  {
                    name: 'Unlimited Virtual Cards',
                    trovo: true,
                    banks: false,
                    others: false,
                  },
                  {
                    name: 'Transparent, No Hidden Fees',
                    trovo: true,
                    banks: false,
                    others: true,
                  },
                  {
                    name: 'Seamless Bill Splitting',
                    trovo: true,
                    banks: false,
                    others: true,
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 md:px-6 text-sm font-semibold text-white">
                      {row.name}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center">
                      {row.trovo ? (
                        <span className="text-2xl text-[#42ffa1]">✓</span>
                      ) : (
                        <span className="text-2xl text-gray-500">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center">
                      {row.banks ? (
                        <span className="text-2xl text-gray-500">✓</span>
                      ) : (
                        <span className="text-2xl text-gray-500">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center">
                      {row.others ? (
                        <span className="text-2xl text-gray-500">✓</span>
                      ) : (
                        <span className="text-2xl text-gray-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.assign('/join')}
            className="px-8 py-4 rounded-full font-black text-black bg-[#06B6D4] hover:bg-[#00b5d4] transition-all duration-300 shadow-lg shadow-[#06B6D4]/40 text-lg"
          >
            Experience the Difference
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductDifferentiators
