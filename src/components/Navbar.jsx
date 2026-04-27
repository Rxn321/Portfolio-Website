export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div className="flex items-center justify-center
        rounded-full bg-white/5 backdrop-blur-xl
        border border-white/10 px-10 py-6 text-lg">

        <div className="flex gap-12 text-white/70">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </nav>
  )
}