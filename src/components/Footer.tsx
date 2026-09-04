export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">The WeekEnd Company</h3>
            <p className="text-gray-400 flex items-center gap-2">
              Built after hours. ☕
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Work</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/theweekendcompanyco" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://www.instagram.com/the_weekend_company_official" className="hover:text-white transition">Instagram</a></li>
              <li><a href="mailto:theweekendcompany.co@gmail.com" className="hover:text-white transition">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The WeekEnd Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
