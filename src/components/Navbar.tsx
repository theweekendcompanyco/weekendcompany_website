export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">The WeekEnd Company</div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-sm hover:text-accent transition">Services</a>
          <a href="#about" className="text-sm hover:text-accent transition">About</a>
          <a href="#portfolio" className="text-sm hover:text-accent transition">Work</a>
          <a href="#contact" className="text-sm hover:text-accent transition">Contact</a>
        </div>
        <button className="px-6 py-2 bg-accent text-white rounded text-sm font-medium hover:bg-blue-700 transition">
          Let's work together
        </button>
      </div>
    </nav>
  )
}
