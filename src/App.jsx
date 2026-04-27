import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-slate-800 to-gray-700 text-white">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}