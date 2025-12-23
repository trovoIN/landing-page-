import { motion, easeOut } from 'framer-motion'

interface UserStory {
  name: string
  role: string
  savings: string
  quote: string
  avatar: string
  highlight: string
}

const userStories: UserStory[] = [
  {
    name: 'Priya Sharma',
    role: 'Freelancer from Delhi',
    savings: '₹6,500/month',
    quote: 'Trovo made my rewards actually useful. No more expired points sitting in my account.',
    avatar: '👩‍💼',
    highlight: 'Redeems 100% of rewards'
  },
  {
    name: 'Amit Patel',
    role: 'Startup Founder, Mumbai',
    savings: '₹12,000/month',
    quote: 'One less thing to worry about. My business money management just got so much simpler.',
    avatar: '👨‍💼',
    highlight: 'Fully automated cashback'
  },
  {
    name: 'Rahul & Neha',
    role: 'Young Couple, Bangalore',
    savings: '₹8,400/month',
    quote: 'Sharing expenses without losing trust. We can finally split cards without the stress.',
    avatar: '👫',
    highlight: 'Secure card sharing'
  },
]

/**
 * UserStoriesSection
 * Displays real user success stories with savings metrics
 * Replaces generic collage showcase with emotional, human connection
 */
const UserStoriesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <section
      className="relative py-20 md:py-32 bg-gradient-to-b from-night-900 via-night-800 to-night-900 overflow-hidden"
      aria-labelledby="stories-heading"
    >
      {/* Animated background grid - subtle */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231DB954'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-trovo-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            REAL STORIES, REAL RESULTS
          </p>
          <h2
            id="stories-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            See what Trovo <span className="text-trovo-green">unlocked</span> for real people
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            From freelancers to families—everyone's saving more, stressing less.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {userStories.map((story) => (
            <motion.div
              key={story.name}
              variants={cardVariants}
              className="relative rounded-3xl border border-trovo-green/10 bg-gradient-to-br from-night-800/80 to-night-900/60 p-8 backdrop-blur-xl overflow-hidden group"
              whileHover={{
                y: -8,
                borderColor: 'rgba(29, 185, 84, 0.3)',
                boxShadow: '0 20px 60px rgba(29, 185, 84, 0.1)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-trovo-green/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                aria-hidden
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header with avatar and savings */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="text-5xl mb-3 leading-none">{story.avatar}</div>
                    <h3 className="text-xl font-bold text-white leading-tight">{story.name}</h3>
                    <p className="text-sm text-trovo-gold font-medium mt-1">{story.role}</p>
                  </div>
                </div>

                {/* Savings highlight */}
                <div className="mb-6 p-4 rounded-xl bg-success-glow/10 border border-success-glow/30">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Saving</p>
                  <p className="text-2xl font-bold text-success-glow mt-1">{story.savings}</p>
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1">
                  <p className="text-base text-gray-300 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </blockquote>

                {/* Highlight badge */}
                <motion.div
                  className="inline-flex px-4 py-2 rounded-full bg-trovo-green/10 border border-trovo-green/30 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-semibold text-trovo-green">✓ {story.highlight}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative rounded-3xl border border-trovo-gold/20 bg-gradient-to-r from-night-800/50 to-night-900/50 p-8 md:p-12 text-center backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to unlock your potential?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands already saving with Trovo. See your potential savings in seconds.
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Calculate your savings
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default UserStoriesSection
