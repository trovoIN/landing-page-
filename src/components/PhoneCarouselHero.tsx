import { motion } from 'framer-motion'

const phones = [
  { id: 1, bg: 'bg-emerald-600', angle: -20, z: 10, scale: 0.9 },
  { id: 2, bg: 'bg-emerald-400', angle: -10, z: 20, scale: 0.95 },
  { id: 3, bg: 'bg-gray-900', angle: 0, z: 30, scale: 1.05 },
  { id: 4, bg: 'bg-cyan-500', angle: 12, z: 20, scale: 0.95 },
  { id: 5, bg: 'bg-violet-500', angle: 24, z: 10, scale: 0.9 },
]

const PhoneFrame = ({ bg, angle, z, scale }: { bg: string; angle: number; z: number; scale: number }) => (
  <motion.div
    className="relative w-40 md:w-48 lg:w-56 h-80 md:h-96 lg:h-[440px]"
    style={{ zIndex: z }}
    initial={{ rotate: angle, scale }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Glow */}
    <div className="absolute -inset-3 bg-gradient-to-br from-trovo-green/20 to-transparent blur-2xl rounded-[2rem]" aria-hidden />
    {/* Frame */}
    <div className="relative w-full h-full rounded-[2rem] p-2 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-black rounded-full" />
      {/* Screen */}
      <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-white">
        <div className={`absolute inset-0 ${bg} opacity-10`} aria-hidden />
        <div className="absolute inset-0 grid place-items-center">
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-200 to-white shadow-inner" />
          <div className="mt-6 h-2 w-16 rounded-full bg-gray-300" />
          <div className="mt-2 h-2 w-20 rounded-full bg-gray-200" />
        </div>
        {/* Bottom dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  </motion.div>
)

const PhoneCarouselHero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background gradient band */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,25,25,0.0)_0%,rgba(25,25,25,0.2)_55%,rgba(25,25,25,0.6)_100%)]" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.4)_100%)]" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Trovofi badge */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/trovo.svg" alt="trovofi" className="w-8 h-8" />
          <span className="text-trovo-green font-bold tracking-wide">trovofi</span>
        </div>
        {/* Carousel */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {phones.map((p) => (
            <PhoneFrame key={p.id} bg={p.bg} angle={p.angle} z={p.z} scale={p.scale} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhoneCarouselHero
