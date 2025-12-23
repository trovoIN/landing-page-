import React from 'react'
import ScrollReveal from './ScrollReveal'

const LINES = [
  'not points. not promises.',
  'real cash, in real time.',
  'the story of trovo',
  'begins where others stop rewarding.',
  'every bill, a bonus.',
  'every tap, a win.',
  'every payment, instant value.',
  'no coins. no chips.',
  'just money — back to you.',
  'this is trovo.',
]

const ScrollStory: React.FC = () => {
  return (
    <section aria-labelledby="story-title" className="relative bg-gradient-to-b from-night-900 via-night-800 to-night-900">
      {/* subtle masks for cinematic fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28">
        <div className="mb-8 sm:mb-10">
          <p id="story-title" className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-trovo-green/80">
            real rewards. no noise.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          {LINES.map((line, index) => (
            <ScrollReveal
              key={`${line}-${index}`}
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="leading-[1.05] tracking-tight font-serif text-[11.5vw] sm:text-[8.5vw] md:text-[6.5vw] lg:text-[5vw] xl:text-[4.4vw] text-white"
            >
              {line}
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <a
            href="/join"
            className="inline-flex items-center rounded-full bg-trovo-green text-white px-6 py-3 text-sm sm:text-base font-semibold hover:bg-trovo-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40"
            data-attr="cta:join-early-access"
          >
            Join Early Access
          </a>
        </div>
      </div>
    </section>
  )
}

export default ScrollStory