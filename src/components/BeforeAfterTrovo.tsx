import React from 'react'
import { motion } from 'framer-motion'

const beforePanels = [
  { title: 'Lost in Points', desc: 'Credit card rewards that expire before you can use them.', icon: encodeURI('/12335.svg') },
  { title: 'UPI Feels Empty', desc: 'You scan, pay, repeat — and get nothing back.', icon: encodeURI('/12336.svg') },
  { title: 'Sharing Feels Risky', desc: 'Lending your card shouldn’t mean losing control.', icon: encodeURI('/12337.svg') },
]

const afterCards = [
  { title: 'Points Redemption', desc: 'Redeem points before they expire—no chips, no vouchers, only cash rewards.', icon: encodeURI('/12338.svg') },
  { title: '1% UPI Cashback', desc: 'Every UPI transaction gives you guaranteed 1% — no luck, just logic.', icon: encodeURI('/trovo1233.svg') },
  { title: 'Hidden Card Issuances', desc: 'Private, secure, and customizable virtual cards for every need.', icon: encodeURI('/1233 4.svg') },
  { title: 'One‑Tap NFC Payments', desc: 'Pay in seconds. Tap your phone. Done.', icon: encodeURI('/12335.svg') },
]

const BeforeAfterTrovo: React.FC = () => {
  return (
    <section id="before-after" aria-labelledby="before-title" className="relative w-full overflow-hidden bg-night-900">
      {/* Dark theme background aligned with Trovo */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-800 to-night-700" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-trovo-green/0 via-trovo-green/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2, once: false }}
        transition={{ duration: 0.8 }}
      />

      {/* BEFORE: tighten bottom padding to reduce gap */}
      <div className="relative container-custom pt-14 sm:pt-16 md:pt-24 pb-8 md:pb-10">
        {/* Left rail with brand hint (desktop only) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0" aria-hidden>
          <div className="relative h-full w-10">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-trovo-green/15 via-trovo-green/50 to-trovo-green/15 animate-pulse-slow" />
          </div>
        </div>

        {/* Header */}
        <div className="relative md:pl-8 text-center md:text-left">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-trovo-green/70">The story of payments today</p>
          <h2 id="before-title" className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Before Trovo</h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base">Frustration, confusion, and zero real value on everyday money flows.</p>
        </div>

        {/* Panels (light glass) */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {beforePanels.map((p, idx) => (
              <motion.div
                key={p.title}
                className="relative rounded-2xl border border-white/10 bg-night-800/80 backdrop-blur-md p-5 sm:p-6 md:p-8 text-white overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.99, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* parallax glow */}
                <motion.div
                  aria-hidden
                  className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-trovo-green/10 blur-3xl"
                  animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    {p.icon && (
                      <img src={p.icon} alt={p.title} className="w-10 h-10 shrink-0" loading="lazy" draggable={false} />
                    )}
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-400">{p.desc}</p>
                  {/* brand underline */}
                  <div className="mt-6 h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-trovo-green/30 via-trovo-green/80 to-trovo-green/30"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + idx * 0.08 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bridge / transition text (light pill) - reduce margin */}
        <div className="mt-8 sm:mt-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 bg-night-800/60 text-ink-muted backdrop-blur-md"
              initial={{ filter: 'blur(8px)' }}
              whileInView={{ filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Then came Trovo. Real rewards. Instant value. One tap that changes everything.
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Soft brand gradient as we enter After Trovo */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-br from-trovo-green/20 via-night-800/40 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />

      {/* AFTER: smaller top padding to close the transition space */}
      <div className="relative">
        <div className="relative container-custom pt-8 md:pt-10 pb-16 md:pb-24">
          <div className="text-center">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-ink-muted">After Trovo</p>
            <h2 id="after-title" className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Here’s how Trovo fixes it.</h2>
            <p className="mt-2 text-ink-muted text-sm sm:text-base">Simple, secure, rewarding — by design.</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
              {afterCards.map((c, idx) => (
              <motion.div
                key={c.title}
                  className="group relative rounded-2xl border border-white/10 bg-night-800/60 backdrop-blur-md p-5 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-trovo-green/20 transition-transform"
                initial={{ opacity: 0, y: 18, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {/* Top accent line */}
                <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-trovo-green/40 via-trovo-green/70 to-trovo-green/40" />
                {/* glow */}
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-trovo-green/5 to-trovo-green-light/10" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    {c.icon && (
                      <img src={c.icon} alt={c.title} className="w-10 h-10 shrink-0" loading="lazy" draggable={false} />
                    )}
                    <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                  </div>
                  <p className="text-gray-400">{c.desc}</p>
                </div>
              </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl text-ink-muted">Trovo makes payments rewarding again.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterTrovo
