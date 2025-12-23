import { motion, useInView, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'

const AboutPage = () => {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)
  
  // Scroll-based animations for hero section - EXACT SAME AS HOME PAGE
  const { scrollYProgress } = useScroll()
  
  // Force scroll to top on component mount and page reload
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // Optimized scroll transforms - Complete blur effect (SAME AS HOME PAGE)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 2.0])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [0, 50])
  const contentFilter = useMotionTemplate`blur(${blurAmount}px)`
  
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    document.title = 'About Us - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Trovo",
      "alternateName": ["Trovo Fi", "Trovo Fintech"],
      "description": "Trovo Fi is revolutionizing financial management for every Indian by transforming unused credit card points into instant rewards and seamless digital payments.",
      "foundingDate": "2024",
      "industry": "Financial Technology",
      "areaServed": {
        "@type": "Country", 
        "name": "India"
      },
      "mission": "To democratize financial rewards and make every transaction rewarding for Indian consumers",
      "vision": "To become India's most trusted fintech platform for credit card optimization and digital payments",
      "values": ["Innovation", "Trust", "Customer-centricity", "Financial Inclusion"]
    }
  }

  return (
    <PageTransition>
      <NativeSEO 
        title="About Trovo Fi - Revolutionary Fintech Company | Our Story & Mission"
        description="Learn about Trovo Fi's mission to revolutionize financial management for Indians. Discover how we're transforming credit card points into instant rewards and building the future of fintech in India."
        keywords="about trovo, trovo fi company, trovo fintech story, trovo mission, trovo vision, indian fintech company, financial technology india, trovo team, credit card fintech, digital payments startup"
        canonical="https://trovo.app/about"
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen bg-night-900 pt-16 md:pt-20 overflow-x-hidden">
        
        {/* About Trovo Hero Section - About Content */}
        <section 
          className="relative h-screen w-full bg-gradient-to-br from-night-900 via-night-800 to-night-900 overflow-hidden sticky top-0" 
          ref={heroRef}
        >
          {/* Background elements - SAME AS HOME PAGE */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            style={{ opacity: backgroundOpacity }}
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-trovo-green opacity-5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-trovo-green-light opacity-3 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10"
          >
            <div className="min-h-screen flex items-center justify-center">
            {/* About Trovo Content - Only this zooms */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                scale: contentScale,
                opacity: contentOpacity,
                filter: contentFilter
              }}
              className="space-y-10"
            >
              {/* Main Title and Subtitle */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  About{' '}
                  <span className="text-trovo-green">Trovo</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Revolutionizing financial management for every Indian
                </p>
              </div>
              
              {/* Detailed Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  We're building the future of fintech in India, revolutionizing how you manage money. 
                  Our mission is to unlock the hidden value in your credit cards and create smarter 
                  financial opportunities for every Indian.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Trovo combines intelligent reward optimization, guaranteed UPI cashback, 
                  and seamless payments into one simple platform that puts more money 
                  back in your pocket.
                </p>
                
                <div className="bg-night-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mt-10">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
                    From watching credit card points expire to building India's smartest financial platform — 
                    we're making financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-night-800/40 relative z-20 w-full overflow-x-hidden" ref={storyRef}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-trovo-green/20 via-night-800/40 to-night-900 rounded-3xl p-12 border border-white/10">
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Our Journey</h3>
                    <p className="text-gray-300 text-lg">From frustration to innovation</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Trovo was born from a simple frustration: watching millions of credit card 
                    points expire unused while people struggled with scattered payment methods. 
                    Our founder realized this wasn't just a personal problem—millions of Indians 
                    were leaving money on the table every day.
                  </p>
                  <p>
                    We discovered that people struggle with complex reward systems, multiple 
                    payment apps, and missing out on the best financial opportunities. That's 
                    when we decided to build something different.
                  </p>
                  <p>
                    Today, Trovo brings together intelligent reward optimization, guaranteed 
                    UPI cashback, and seamless payments into one simple platform. We're making 
                    financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-padding relative z-20 w-full overflow-x-hidden bg-night-900" ref={missionRef}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-trovo-green">To democratize financial intelligence for every Indian.</strong> We believe 
                    that smart financial decisions shouldn't be complicated or reserved for the wealthy.
                  </p>
                  <p>
                    Our mission is to build technology that automatically optimizes your financial 
                    life—from maximizing credit card rewards to ensuring you never miss cashback 
                    opportunities.
                  </p>
                  <p>
                    We're committed to transparency, security, and putting our users first. Every 
                    feature we build is designed to put more money back in your pocket and give 
                    you peace of mind.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-trovo-green to-trovo-green-dark rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-xl opacity-90">
                      Democratizing financial intelligence for every Indian
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="section-padding bg-night-800/40 relative z-20 w-full overflow-x-hidden" ref={visionRef}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-trovo-green to-emerald-600 rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-xl opacity-90">
                      The future of financial wellness in India
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-blue-600">To become India's most trusted financial companion.</strong> We envision 
                    a future where every Indian has access to intelligent financial tools that 
                    work automatically in the background.
                  </p>
                  <p>
                    We see a world where you never lose money due to expired rewards, forgotten 
                    cashback, or suboptimal payment choices. Where your money works as hard as 
                    you do, 24/7.
                  </p>
                  <p>
                    Our vision extends beyond just payments—we're building an ecosystem that 
                    helps Indians save more, earn more, and achieve their financial goals with 
                    confidence and ease.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default AboutPage
