import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  nofollow?: boolean
  structuredData?: any
}

const defaultSEO = {
  title: 'Trovo - Unlock Your Hidden Treasure | Fintech App India',
  description: 'Turn your unused credit card points into instant rewards and seamless payments. Join thousands of Indians maximizing their financial potential with Trovo.',
  keywords: 'trovo, trovo fi, fintech, credit cards, rewards, UPI, payments, India, financial technology, mobile app, credit card points, instant rewards, cashback, digital payments, financial app, money management, trovo fintech, trovo app, trovo india',
  ogImage: '/trovo.svg',
  ogType: 'website',
  twitterCard: 'summary_large_image'
}

const NativeSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType,
  twitterCard,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const seoTitle = title || defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoKeywords = keywords || defaultSEO.keywords
  const seoOgImage = ogImage || defaultSEO.ogImage
  const seoOgType = ogType || defaultSEO.ogType
  const seoTwitterCard = twitterCard || defaultSEO.twitterCard

  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      
      if (element) {
        element.content = content
      } else {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        element.content = content
        document.head.appendChild(element)
      }
    }

    // Function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      
      if (element) {
        element.href = href
      } else {
        element = document.createElement('link')
        element.rel = rel
        element.href = href
        document.head.appendChild(element)
      }
    }

    // Update basic meta tags
    updateMetaTag('description', seoDescription)
    updateMetaTag('keywords', seoKeywords)
    updateMetaTag('author', 'Trovo')
    updateMetaTag('robots', robotsContent)

    // Update Open Graph tags
    updateMetaTag('og:type', seoOgType, true)
    updateMetaTag('og:title', seoTitle, true)
    updateMetaTag('og:description', seoDescription, true)
    updateMetaTag('og:image', seoOgImage, true)
    updateMetaTag('og:image:alt', 'Trovo Fintech App', true)
    updateMetaTag('og:site_name', 'Trovo', true)
    updateMetaTag('og:locale', 'en_IN', true)

    // Update Twitter Card tags
    updateMetaTag('twitter:card', seoTwitterCard)
    updateMetaTag('twitter:title', seoTitle)
    updateMetaTag('twitter:description', seoDescription)
    updateMetaTag('twitter:image', seoOgImage)
    updateMetaTag('twitter:image:alt', 'Trovo Fintech App')

    // Update additional meta tags (light theme only)
    updateMetaTag('theme-color', '#1DB954')
    updateMetaTag('msapplication-TileColor', '#1DB954')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    updateMetaTag('format-detection', 'telephone=no')

    // Update canonical URL if provided
    if (canonical) {
      updateLinkTag('canonical', canonical)
    }

    // Add structured data if provided
    if (structuredData) {
      let structuredDataElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
      
      if (structuredDataElement) {
        structuredDataElement.textContent = JSON.stringify(structuredData)
      } else {
        structuredDataElement = document.createElement('script')
        structuredDataElement.type = 'application/ld+json'
        structuredDataElement.textContent = JSON.stringify(structuredData)
        document.head.appendChild(structuredDataElement)
      }
    }

    // Cleanup function to prevent memory leaks
    return () => {
      // Optional: Remove specific meta tags if needed
    }
  }, [seoTitle, seoDescription, seoKeywords, seoOgImage, seoOgType, seoTwitterCard, canonical, structuredData, robotsContent])

  return null
}

export default NativeSEO
