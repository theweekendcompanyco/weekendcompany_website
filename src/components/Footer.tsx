export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-bold mb-2">The WeekEnd Company</h3>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built after hours. ☕
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Digital work for small businesses and individuals.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  BUILD — Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  CLEAN — Data
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  DESIGN — Visuals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  HELP — Tasks
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/theweekendcompanyco"
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_weekend_company_official"
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:theweekendcompany.co@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} The WeekEnd Company. All rights reserved.</p>
            <p>Built with React + Vite. Hosted on Vercel.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
