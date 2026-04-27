import About from "./components/About"
import Contact from "./components/Contacts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

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