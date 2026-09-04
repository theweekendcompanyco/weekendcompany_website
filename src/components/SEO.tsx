import { useEffect } from 'react'

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export default function SEO({
  title,
  description,
  canonical = 'https://theweekendcompany.co',
  ogImage = 'https://theweekendcompany.co/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.name = name
        document.head.appendChild(element)
      }
      element.content = content
    }

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.content = content
    }

    updateMeta('description', description)
    updateMeta('viewport', 'width=device-width, initial-scale=1.0')
    updateOGMeta('og:title', title)
    updateOGMeta('og:description', description)
    updateOGMeta('og:image', ogImage)
    updateOGMeta('og:type', ogType)
    updateMeta('twitter:card', twitterCard)
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)

    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical
  }, [title, description, canonical, ogImage, ogType, twitterCard])

  return null
}
