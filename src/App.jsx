export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      

      <nav className="relative flex items-center justify-between px-6 py-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Hi, I'm Ryan
        </h1>

        <p className="mt-6 text-white/60 text-lg max-w-xl">
          blahhhhhhh
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
            View Projects
          </a>

          <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
            Contact
          </a>
        </div>
      </main>

      {/* Sections */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-white/60">
          hehehehehe ha
        </p>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">Portfolio Website</h3>
            <p className="text-white/60 text-sm mt-2">React + Tailwind portfolio</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">Coming Soon</h3>
            <p className="text-white/60 text-sm mt-2">More projects on the way</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-white/60">
          <a
            href="mailto:liuryanty@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Send Email
          </a>
        </p>
      </section>

    </div>
  )
}