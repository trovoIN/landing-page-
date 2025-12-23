"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useMotionValue, useSpring } from "framer-motion"

type MarkerLocation = [number, number]

type MarkerConfig = {
  location: MarkerLocation
  size: number
  color?: [number, number, number]
}

const GLOBAL_HUBS: MarkerConfig[] = [
  { location: [40.7128, -74.006] as MarkerLocation, size: 0.08 }, // New York
  { location: [34.0522, -118.2437] as MarkerLocation, size: 0.07 }, // Los Angeles
  { location: [51.5074, -0.1278] as MarkerLocation, size: 0.08 }, // London
  { location: [48.8566, 2.3522] as MarkerLocation, size: 0.07 }, // Paris
  { location: [35.6762, 139.6503] as MarkerLocation, size: 0.08 }, // Tokyo
  { location: [1.3521, 103.8198] as MarkerLocation, size: 0.07 }, // Singapore
  { location: [28.6139, 77.209] as MarkerLocation, size: 0.07 }, // Delhi
  { location: [-33.8688, 151.2093] as MarkerLocation, size: 0.07 }, // Sydney
  { location: [55.7558, 37.6173] as MarkerLocation, size: 0.07 }, // Moscow
  { location: [-23.5505, -46.6333] as MarkerLocation, size: 0.07 }, // São Paulo
]

const CONNECTION_PAIRS: Array<[MarkerLocation, MarkerLocation]> = [
  [GLOBAL_HUBS[0].location, GLOBAL_HUBS[2].location],
  [GLOBAL_HUBS[0].location, GLOBAL_HUBS[5].location],
  [GLOBAL_HUBS[2].location, GLOBAL_HUBS[4].location],
  [GLOBAL_HUBS[4].location, GLOBAL_HUBS[7].location],
  [GLOBAL_HUBS[4].location, GLOBAL_HUBS[9].location],
  [GLOBAL_HUBS[5].location, GLOBAL_HUBS[6].location],
  [GLOBAL_HUBS[6].location, GLOBAL_HUBS[3].location],
  [GLOBAL_HUBS[8].location, GLOBAL_HUBS[2].location],
  [GLOBAL_HUBS[9].location, GLOBAL_HUBS[0].location],
  [GLOBAL_HUBS[1].location, GLOBAL_HUBS[5].location],
]

const createConnectionMarkers = (from: MarkerLocation, to: MarkerLocation, segments = 32): MarkerConfig[] => {
  const markers: MarkerConfig[] = []

  for (let i = 1; i < segments; i += 1) {
    const progress = i / segments
    markers.push({
      location: [
        from[0] + (to[0] - from[0]) * progress,
        from[1] + (to[1] - from[1]) * progress,
      ],
      size: 0.012,
      color: [59 / 255, 130 / 255, 246 / 255],
    })
  }

  return markers
}

const buildGlobalMarkerSet = (): MarkerConfig[] => {
  const lineSegments = CONNECTION_PAIRS.flatMap((pair) => createConnectionMarkers(pair[0], pair[1]))
  return [...GLOBAL_HUBS, ...lineSegments]
}

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1] as [number, number, number],
  markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
  glowColor: [1, 1, 1] as [number, number, number],
  markers: buildGlobalMarkerSet(),
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: typeof GLOBE_CONFIG
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div className={"relative mx-auto h-full w-full" + (className ? ` ${className}` : "")}>
      <canvas
        className={
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        }
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
