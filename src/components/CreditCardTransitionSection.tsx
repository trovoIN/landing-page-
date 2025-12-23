import React from 'react'
import { motion } from 'framer-motion'

const CreditCardTransitionSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/40" aria-hidden />

      <motion.video
        src="/creditcardstransition.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[75vh] lg:h-[85vh] object-cover"
        aria-label="Trovo credit card experience animation"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute inset-y-0 left-0 flex items-center"
      >
        <div className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 max-w-xl space-y-4 bg-black/40 backdrop-blur-md rounded-r-3xl text-white">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/80">
            Trovo in motion
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Real rewards ride on every swipe.
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            A full-screen glimpse of Trovo’s credit card rail—limit controls, UPI cashbacks,
            and secure sharing stitched into one simple flow.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default CreditCardTransitionSection

