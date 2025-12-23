import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PhoneImageShowcaseProps { autoPlayMs?: number; className?: string }

// Use Rectangle SVG mockups from public folder
const IMAGES = [
  '/Rectangle.svg',
  '/Rectangle-1.svg',
  '/Rectangle-2.svg',
  '/Rectangle-3.svg',
  '/Rectangle-4.svg',
  '/Rectangle-5.svg'
].map(encodeURI)

// Preload images to prevent layout shifts
const preloadImages = () => {
  IMAGES.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

// Preload on module load
if (typeof window !== 'undefined') {
  preloadImages()
}

const PhoneImageShowcase: React.FC<PhoneImageShowcaseProps> = ({ autoPlayMs = 4000, className = '' }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), autoPlayMs)
    return () => clearInterval(t)
  }, [autoPlayMs])

  return (
    <div className={`relative inline-block ${className}`} aria-label="Trovo app preview">
      {/* Fixed container to prevent layout shifts */}
      <div className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[18rem] xl:w-[20rem] aspect-[9/19.5] relative mx-auto lg:mx-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={IMAGES[index]}
            src={IMAGES[index]}
            alt="Trovo product mockup"
            className="absolute inset-0 w-full h-full object-contain select-none drop-shadow-sm will-change-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            draggable={false}
            style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PhoneImageShowcase