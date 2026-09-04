import { useEffect } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Add JSON-LD structured data for organization
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'The WeekEnd Company',
      description: 'Digital work, built after hours. Websites, data cleanup, design and practical digital work for small businesses and individuals.',
      url: 'https://theweekendcompany.co',
      email: 'theweekendcompany.co@gmail.com',
      sameAs: [
        'https://github.com/theweekendcompanyco',
        'https://www.instagram.com/the_weekend_company_official',
      ],
      areaServed: 'Worldwide',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'theweekendcompany.co@gmail.com',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="scroll-smooth">
      <SEO
        title="The WeekEnd Company — Digital Work, Built After Hours"
        description="Digital work for small businesses and individuals. Websites, data cleanup, design, and practical digital tasks. Built after hours."
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
