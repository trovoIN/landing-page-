import React from 'react'
import { motion } from 'framer-motion'
import GridDistortionTinted from './GridDistortionTinted'

const FlyingPostersSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-night-900">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-trovo-green to-cyan-400 bg-clip-text text-transparent mb-4">
            One System
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Different moments.
          </p>
          <p className="text-lg md:text-xl text-trovo-green font-semibold">
            One intelligence.
          </p>
        </motion.div>

        {/* College Image Display */}
        <div className="relative h-96 md:h-[500px] mb-12 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <GridDistortionTinted
              imageSrc="/college.jpeg"
              grid={20}
              mouse={0.12}
              strength={0.2}
              relaxation={0.92}
              tint="#1DB954"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Real-time Insights',
              desc: 'See every transaction and reward in one glance.'
            },
            {
              title: 'Instant Cashback',
              desc: 'Rewards that hit your account instantly, not later.'
            },
            {
              title: 'Seamless Security',
              desc: 'Military-grade encryption for every interaction.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-trovo-green/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-trovo-green font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-trovo-green/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          aria-hidden
        />
      </div>
    </section>
  )
}

export default FlyingPostersSection
