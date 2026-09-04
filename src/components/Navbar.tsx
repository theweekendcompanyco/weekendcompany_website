import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary/95 border-b border-dark-border/80 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex justify-between items-center">
        {/* Official Brand Logo Anchor */}
        <a 
          href="#" 
          aria-label="The WeekEnd Company Home" 
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-lg"
        >
          <img
            src="/logo.jpg"
            alt="The WeekEnd Company Official Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain rounded-xl border border-dark-border shadow-lg group-hover:border-accent/80 group-hover:scale-[1.02] transition duration-200"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 lg:gap-12 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base lg:text-lg font-semibold text-text-primary hover:text-gold-bright transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Primary CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 bg-accent text-primary rounded-xl text-base lg:text-lg font-bold hover:bg-gold-bright transition duration-200 shadow-lg shadow-accent/20 active:scale-95"
        >
          Let's work together
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-dark-card rounded-lg transition text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-border bg-primary/98 backdrop-blur-lg">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-base font-medium text-text-primary hover:text-gold-bright transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 bg-accent text-primary rounded-lg text-sm font-bold text-center hover:bg-gold-bright transition shadow-md shadow-accent/15"
              onClick={() => setIsOpen(false)}
            >
              Let's work together
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
