import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HashScroll = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')

    // Give the route a tick to render
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)

    return () => clearTimeout(t)
  }, [location.key, location.hash])

  return null
}

export default HashScroll
