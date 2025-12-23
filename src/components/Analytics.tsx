import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Google Analytics tracking ID - replace with your actual GA4 tracking ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual tracking ID

// Event tracking functions for SEO and user behavior
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'trovo_engagement',
      event_label: 'trovo_fi_action',
      ...parameters
    })
  }
}

export const trackCTAClick = (ctaType: 'early_access' | 'learn_more' | 'contact' | 'faq', location: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    cta_location: location,
    custom_parameter_1: 'interested_user',
    custom_parameter_2: ctaType
  })
}

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    event_category: 'engagement'
  })
}

export const trackFormSubmission = (formType: 'waitlist' | 'contact' | 'newsletter') => {
  trackEvent('form_submission', {
    form_type: formType,
    event_category: 'conversion',
    custom_parameter_1: 'converting_user',
    custom_parameter_2: formType
  })
}

// Performance tracking with correct types
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Use the performance.timing API which has navigationStart
        const timing = performance.timing
        
        if (timing && window.gtag) {
          // Track Core Web Vitals
          window.gtag('event', 'page_performance', {
            event_category: 'performance',
            page_load_time: Math.round(timing.loadEventEnd - timing.navigationStart),
            dom_content_loaded_time: Math.round(timing.domContentLoadedEventEnd - timing.navigationStart),
            first_paint_time: Math.round(timing.responseEnd - timing.navigationStart)
          })
        }
      }, 0)
    })
  }
}

// SEO and conversion tracking
export const trackUserJourney = (milestone: string, additionalData: Record<string, any> = {}) => {
  trackEvent('user_journey', {
    milestone,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    ...additionalData
  })
}

// Initialize performance tracking
export const initializeTracking = () => {
  trackPerformance()
  
  // Track initial page load
  if (typeof window !== 'undefined') {
    trackUserJourney('page_loaded', {
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`
    })
  }
}

const Analytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
      // Load Google Analytics script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
      document.head.appendChild(script)

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA_TRACKING_ID, {
        send_page_view: false,
        custom_map: {
          custom_parameter_1: 'trovo_user_type',
          custom_parameter_2: 'trovo_feature_interest'
        }
      })
    }
  }, [])

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        send_page_view: true
      })
    }
  }, [location])

  return null
}

export default Analytics