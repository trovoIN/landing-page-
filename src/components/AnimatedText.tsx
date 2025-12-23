import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const BlurInText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0
}) => {
  const words = text.split(" ")

  return (
    <span className={className} style={{ display: 'block', minHeight: '1.2em' }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          style={{ 
            willChange: 'opacity, filter',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
          initial={{ 
            opacity: 0,
            filter: "blur(8px)"
          }}
          animate={{ 
            opacity: 1,
            filter: "blur(0px)"
          }}
          transition={{
            delay: delay + index * 0.08,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] // Smoother easing
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export const BlurInLetters: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0
}) => {
  const letters = text.split("")

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ 
            opacity: 0,
            filter: "blur(8px)",
            scale: 1.2
          }}
          animate={{ 
            opacity: 1,
            filter: "blur(0px)",
            scale: 1
          }}
          transition={{
            delay: delay + index * 0.03,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}

export const TypewriterText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0 
}) => {
  const letters = text.split("")

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.1
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export const GlitchText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.span
      className={`${className} relative inline-block`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text}
      <motion.span
        className="absolute top-0 left-0 text-trovo-green opacity-70"
        animate={{
          x: [0, -2, 2, 0],
          skewX: [0, 2, -2, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: 3,
          delay: delay + 0.5
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          skewX: [0, -2, 2, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: 3,
          delay: delay + 0.7
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

export const WaveText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "",
  delay = 0 
}) => {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 0.6,
                delay: delay + (wordIndex * word.length + letterIndex) * 0.1,
                repeat: 1
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

export const FadeInWords: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "",
  delay = 0 
}) => {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + index * 0.2,
            duration: 0.6
          }}
          style={{ 
            perspective: "400px",
            transformStyle: "preserve-3d"
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
