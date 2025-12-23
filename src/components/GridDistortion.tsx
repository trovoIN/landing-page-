import React, { useRef, useEffect } from 'react'
import './GridDistortion.css'

interface GridDistortionProps {
  grid?: number
  mouse?: number
  strength?: number
  relaxation?: number
  imageSrc: string
  className?: string
}

const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}
`

const GridDistortion: React.FC<GridDistortionProps> = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const rendererRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)
  const planeRef = useRef<any>(null)
  const animationIdRef = useRef<number | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    let THREE: any
    let cleanup: (() => void) | undefined
    ;(async () => {
      try {
        // Lazy-load three to avoid hard dependency if not installed yet
        const lib: any = 'three'
        const mod: any = await import(/* @vite-ignore */ lib)
        THREE = mod.default ?? mod
      } catch {
        // If three is missing, gracefully no-op
        return
      }

      if (!containerRef.current) return
      const container = containerRef.current

      const scene = new THREE.Scene()
      sceneRef.current = scene

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      rendererRef.current = renderer
      container.innerHTML = ''
      container.appendChild(renderer.domElement)

      const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000)
      camera.position.z = 2
      cameraRef.current = camera

      const uniforms: any = {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
        uTexture: { value: null },
        uDataTexture: { value: null }
      }

      const textureLoader = new THREE.TextureLoader()
      textureLoader.load(imageSrc, (texture: any) => {
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        uniforms.uTexture.value = texture
        handleResize()
      })

      const size = grid
      const data = new Float32Array(4 * size * size)
      for (let i = 0; i < size * size; i++) {
        data[i * 4] = Math.random() * 255 - 125
        data[i * 4 + 1] = Math.random() * 255 - 125
      }

      const dataTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType)
      dataTexture.needsUpdate = true
      uniforms.uDataTexture.value = dataTexture

      const material = new THREE.ShaderMaterial({ side: THREE.DoubleSide, uniforms, vertexShader, fragmentShader, transparent: true })
      const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1)
      const plane = new THREE.Mesh(geometry, material)
      planeRef.current = plane
      scene.add(plane)

    const handleResize = () => {
      const rect = container.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      if (width === 0 || height === 0) return
      const containerAspect = width / height
      renderer.setSize(width, height)
      if (plane) plane.scale.set(containerAspect, 1, 1)
      const frustumHeight = 1
      const frustumWidth = frustumHeight * containerAspect
      camera.left = -frustumWidth / 2
      camera.right = frustumWidth / 2
      camera.top = frustumHeight / 2
      camera.bottom = -frustumHeight / 2
      camera.updateProjectionMatrix()
      uniforms.resolution.value.set(width, height, 1, 1)
    }

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => handleResize())
      resizeObserver.observe(container)
      resizeObserverRef.current = resizeObserver
    } else {
      window.addEventListener('resize', handleResize)
    }

    const mouseState = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 }
    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height
      mouseState.vX = x - mouseState.prevX
      mouseState.vY = y - mouseState.prevY
      Object.assign(mouseState, { x, y, prevX: x, prevY: y })
    }
    const onLeave = () => Object.assign(mouseState, { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 })
    container.addEventListener('mousemove', onMove)
    container.addEventListener('mouseleave', onLeave)

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      const dataArr = uniforms.uDataTexture.value?.image.data as Float32Array
      if (!dataArr) return
      for (let i = 0; i < size * size; i++) {
        dataArr[i * 4] *= relaxation
        dataArr[i * 4 + 1] *= relaxation
      }
      const gridMouseX = size * mouseState.x
      const gridMouseY = size * mouseState.y
      const maxDist = size * mouse
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distSq = Math.pow(gridMouseX - i, 2) + Math.pow(gridMouseY - j, 2)
          if (distSq < maxDist * maxDist) {
            const index = 4 * (i + size * j)
            const power = Math.min(maxDist / Math.sqrt(Math.max(distSq, 0.0001)), 10)
            dataArr[index] += strength * 100 * mouseState.vX * power
            dataArr[index + 1] -= strength * 100 * mouseState.vY * power
          }
        }
      }
      uniforms.uDataTexture.value!.needsUpdate = true
      renderer.render(scene, camera)
    }

      handleResize()
      animate()

      cleanup = () => {
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current as number)
        if (resizeObserverRef.current) resizeObserverRef.current.disconnect()
        else window.removeEventListener('resize', handleResize)
        container.removeEventListener('mousemove', onMove)
        container.removeEventListener('mouseleave', onLeave)
        renderer.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
        geometry.dispose()
        material.dispose()
        uniforms.uDataTexture.value?.dispose?.()
        uniforms.uTexture.value?.dispose?.()
        sceneRef.current = null
        rendererRef.current = null
        cameraRef.current = null
        planeRef.current = null
      }
    })()

    return () => {
      if (cleanup) cleanup()
    }
  }, [grid, mouse, strength, relaxation, imageSrc])

  return <div ref={containerRef} className={`distortion-container ${className}`} style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }} />
}

export default GridDistortion
