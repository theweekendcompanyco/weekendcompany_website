import { GithubIcon, InstagramIcon, MailIcon } from './ui/Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-text-primary py-16 px-6 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column with Official Logo Signature */}
          <div className="space-y-4">
            <a href="#" className="inline-block focus:outline-none focus:ring-1 focus:ring-accent rounded-lg">
              <img
                src="/logo.jpg"
                alt="The WeekEnd Company Official Signature Logo"
                className="h-14 sm:h-16 w-auto object-contain rounded-lg border border-dark-border shadow-lg hover:border-accent/50 transition duration-200"
              />
            </a>
            <p className="text-text-secondary text-sm font-mono flex items-center gap-1.5">
              <span>Built after hours.</span> <span>☕</span>
            </p>
            <p className="text-text-muted text-xs">
              Digital work for small businesses, founders, and individuals.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-4 text-text-muted font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a href="#services" className="hover:text-gold-bright transition">
                  BUILD — Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition">
                  CLEAN — Data
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition">
                  DESIGN — Visuals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition">
                  HELP — Tasks
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-4 text-text-muted font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a href="#about" className="hover:text-gold-bright transition">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-bright transition">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-bright transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider mb-4 text-text-muted font-semibold">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="https://github.com/theweekendcompanyco"
                  aria-label="The WeekEnd Company on GitHub"
                  className="group flex items-center gap-2 hover:text-gold-bright transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_weekend_company_official"
                  aria-label="The WeekEnd Company on Instagram"
                  className="group flex items-center gap-2 hover:text-gold-bright transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="w-4 h-4 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:theweekendcompany.co@gmail.com"
                  aria-label="Email The WeekEnd Company"
                  className="group flex items-center gap-2 hover:text-gold-bright transition"
                >
                  <MailIcon className="w-4 h-4 text-accent group-hover:text-gold-bright transition-transform duration-200 group-hover:scale-110" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-dark-border pt-8 space-y-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-text-muted">
            <p>&copy; {currentYear} The WeekEnd Company. All rights reserved.</p>
            <p>Built with React + Vite. Hosted on Vercel.</p>
          </div>
          <div className="text-[11px] font-mono text-text-muted/60 text-center sm:text-left pt-1">
            Icons by <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-muted transition underline">Flaticon</a> (Pixel perfect & Magnific)
          </div>
        </div>
      </div>
    </footer>
  )
}
