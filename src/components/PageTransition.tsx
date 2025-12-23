import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>
}

export default PageTransition
