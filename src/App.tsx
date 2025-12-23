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
