import { useEffect } from 'react'

// Generate XML sitemap for the website
export const generateSitemap = () => {
  const baseUrl = 'https://trovo.app'
  const pages = [
    {
      url: '/',
      changefreq: 'daily',
      priority: '1.0',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/about',
      changefreq: 'weekly', 
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/privacy-policy',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/terms-conditions',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/refund-policy',
      changefreq: 'monthly',
      priority: '0.4',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/data-security',
      changefreq: 'monthly',
      priority: '0.4',
      lastmod: new Date().toISOString().split('T')[0]
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://trovo.app/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow certain paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*.xml$ 

# Allow important resources
Allow: /assets/
Allow: /images/
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$`
}

// SEO utility hooks and functions
export const useSEOTitle = (title: string) => {
  useEffect(() => {
    const originalTitle = document.title
    document.title = title
    return () => {
      document.title = originalTitle
    }
  }, [title])
}

// Generate JSON-LD structured data for different page types
export const generateArticleStructuredData = (article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trovo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trovo.app/trovo.svg"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://trovo.app/trovo.svg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://trovo.app"
    }
  }
}

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const generateServiceStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Trovo Financial Services",
    "description": "Revolutionary fintech platform transforming credit card points into instant rewards and seamless digital payments",
    "provider": {
      "@type": "Organization",
      "name": "Trovo",
      "url": "https://trovo.app"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Financial Technology",
    "category": "Fintech",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trovo Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Credit Card Points Conversion",
            "description": "Convert unused credit card points into instant cash rewards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "UPI Digital Payments",
            "description": "Seamless UPI payments with integrated rewards system"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Management",
            "description": "Comprehensive financial tracking and optimization tools"
          }
        }
      ]
    }
  }
}
