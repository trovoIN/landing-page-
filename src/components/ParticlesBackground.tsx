import { useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { ISourceOptions } from 'tsparticles-engine'

const ParticlesBackground = () => {
  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 30, // Reduced FPS for better performance
    detectRetina: false, // Disable retina detection to reduce calculations
    particles: {
      number: { value: 20, density: { enable: true, area: 1000 } }, // Fewer particles
      color: { value: ['#1DB954'] }, // Single color to reduce complexity
      opacity: { value: 0.08 }, // Lower opacity to reduce visual impact
      size: { value: { min: 1, max: 2 } }, // Smaller particles
      move: { 
        enable: true, 
        speed: 0.3, // Slower movement
        direction: 'none', 
        outModes: { default: 'out' },
        straight: false,
        random: false
      },
      links: { enable: false },
      shape: { type: 'circle' }
    },
    interactivity: {
      events: { onHover: { enable: false }, resize: true }, // Disable hover interactions
      modes: {}
    },
    pauseOnOutsideViewport: true,
    reduceDuplicates: true,
    smooth: true
  }), [])

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  return (
    <div className="absolute inset-0 -z-10" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
      <Particles 
        id="tsparticles" 
        options={options} 
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      />
    </div>
  )
}

export default ParticlesBackground