import { motion } from 'framer-motion'

const TrovoPhoneMockup = () => {
  return (
    <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] mx-auto group perspective">
      {/* Enhanced glow effect with animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-trovo-green/30 via-transparent to-cyan-400/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] blur-3xl group-hover:blur-3xl transition-all duration-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden
      />

      {/* Phone frame with premium gradient */}
      <div className="relative w-full h-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1.5 sm:p-2 md:p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
        {/* Notch/Dynamic Island with glow */}
        <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 z-50">
          <motion.div
            className="w-28 sm:w-32 h-2 bg-black rounded-full shadow-lg relative"
            animate={{ boxShadow: ['0 0 20px rgba(97, 220, 163, 0.3)', '0 0 40px rgba(97, 220, 163, 0.5)', '0 0 20px rgba(97, 220, 163, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar with gradient */}
          <div className="h-5 sm:h-6 md:h-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 flex items-center justify-between px-3 sm:px-4 md:px-6 text-xs font-medium text-gray-900 border-b border-gray-100">
            <span className="text-xs font-bold">9:41</span>
            <div className="flex items-center space-x-1">
              <svg className="w-3 sm:w-4 md:w-5 h-2 sm:h-3 md:h-4 text-trovo-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-3 sm:w-4 md:w-6 h-1.5 sm:h-2 md:h-3 border border-gray-400 rounded-sm">
                <div className="w-2.5 sm:w-3.5 md:w-5 h-1 sm:h-1.5 md:h-2.5 bg-trovo-green rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>

          {/* App Content - Premium trovofi Dashboard */}
          <div className="h-full bg-gradient-to-br from-white via-gray-50 to-trovo-green/3 relative overflow-hidden">
            {/* Animated background orbs */}
            <motion.div
              className="absolute top-10 right-5 w-32 h-32 bg-trovo-green/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              aria-hidden
            />
            <motion.div
              className="absolute -bottom-4 left-8 w-40 h-40 bg-cyan-400/5 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              aria-hidden
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Header with trovofi branding */}
              <div className="p-3 sm:p-4 md:p-5 border-b border-gray-200/50">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <img src="/trovo.svg" alt="trovofi" className="w-5 sm:w-6 h-5 sm:h-6" />
                    <h2 className="text-sm sm:text-base font-black bg-gradient-to-r from-gray-900 to-trovo-green bg-clip-text text-transparent">trovofi</h2>
                  </div>
                  <motion.button
                    className="relative w-5 sm:w-6 h-5 sm:h-6"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-full h-full text-trovo-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </motion.button>
                </div>
                <div className="text-xs text-gray-600 font-medium">Welcome back! 👋</div>
              </div>

              {/* Balance & Rewards Showcase */}
              <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">
                <div className="space-y-2">
                  <div className="text-xs text-gray-600">Your Balance</div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-trovo-green via-teal-500 to-cyan-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ₹12,450.50
                  </motion.div>
                  <div className="flex gap-3 pt-2">
                    <motion.div
                      className="flex-1 bg-gradient-to-br from-trovo-green/10 to-transparent border border-trovo-green/30 rounded-lg p-2 sm:p-2.5 text-center hover:border-trovo-green/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xs text-gray-600 mb-1">Rewards</div>
                      <div className="text-sm sm:text-base font-bold text-trovo-green">₹1,234</div>
                    </motion.div>
                    <motion.div
                      className="flex-1 bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/30 rounded-lg p-2 sm:p-2.5 text-center hover:border-cyan-400/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xs text-gray-600 mb-1">Cashback</div>
                      <div className="text-sm sm:text-base font-bold text-cyan-600">+₹89</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-5 py-2 space-y-2">
                <div className="text-xs font-bold text-gray-900 mb-2">Recent Activity</div>
                {[
                  { icon: '🍕', text: 'Pizza Hut', amount: '₹450', points: '+45' },
                  { icon: '🚗', text: 'Uber', amount: '₹320', points: '+32' },
                  { icon: '💳', text: 'AWS Bill Pay', amount: '₹2,450', points: '+245' }
                ].map((tx, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg hover:bg-gray-100/50 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-lg sm:text-xl">{tx.icon}</div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">{tx.text}</div>
                        <div className="text-xs text-gray-500">{tx.amount}</div>
                      </div>
                    </div>
                    <motion.div
                      className="text-right"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <div className="text-xs font-bold text-trovo-green">{tx.points}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="p-3 sm:p-4 md:p-5 space-y-2 border-t border-gray-200/50">
                <motion.button
                  className="w-full bg-gradient-to-r from-trovo-green to-emerald-600 hover:from-trovo-green/90 hover:to-emerald-600/90 text-white py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pay with UPI
                </motion.button>
                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold text-xs transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Transfer
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold text-xs transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Rewards
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone body details */}
        <div className="absolute -top-1 sm:-top-1.5 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  )
}

export default TrovoPhoneMockup
