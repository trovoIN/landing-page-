import { motion, useScroll } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-trovo-green origin-left z-50"
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  )
}

export default ScrollProgressBar
