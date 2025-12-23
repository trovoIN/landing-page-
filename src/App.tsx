import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgressBar from './components/ScrollProgressBar'
import CookieConsent from './components/CookieConsent'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import DataSecurityPage from './pages/DataSecurityPage'
import JoinEarlyAccessPage from './pages/JoinEarlyAccessPage'
import NotFoundPage from './pages/NotFoundPage'
import HashScroll from './components/HashScroll'
import ThankYouPage from './pages/ThankYouPage'
import CursorRipple from './components/CursorRipple'

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const items = [
    { 
      label: 'About', 
      bgColor: 'rgba(22, 163, 74, 0.1)', 
      textColor: '#166534', 
      links: [ 
        { label: 'Company', ariaLabel: 'About Company', href: '/about' }, 
        { label: 'Data Security', ariaLabel: 'Data Security', href: '/data-security' } 
      ] 
    },
    { 
      label: 'Blog', 
      bgColor: 'rgba(34, 197, 94, 0.1)', 
      textColor: '#15803d', 
      links: [ 
        { label: 'Articles', ariaLabel: 'Blog Articles', href: '/blog' }, 
        { label: 'Updates', ariaLabel: 'Product Updates', href: '/blog' } 
      ] 
    },
    { 
      label: 'Contact', 
      bgColor: 'rgba(16, 185, 129, 0.1)', 
      textColor: '#047857', 
      links: [ 
        { label: 'Email', ariaLabel: 'Email us', href: 'mailto:support@trovo.online' }, 
        { label: 'LinkedIn', ariaLabel: 'LinkedIn', href: 'https://www.linkedin.com/company/trovo-fi-private-limited' } 
      ] 
    },
  ]

  return (
    <Router>
      <a href="#content" className="skip-to-content">Skip to content</a>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <CursorRipple />
        <ScrollProgressBar />
        <Navbar />
        <HashScroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/data-security" element={<DataSecurityPage />} />
          <Route path="/join" element={<JoinEarlyAccessPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
