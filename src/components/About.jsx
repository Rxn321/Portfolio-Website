
import snow0 from "../assets/snow-0.jpg"
import snow1 from "../assets/snow-1.PNG"
import snow3 from "../assets/snow-3.jpg"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <section id="about" className="max-w-4xl mx-auto px-6 py-1 space-y-8">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <p className="text-white/60 leading-relaxed">
        I'm a second year mathematics student at the University of British Columbia.
        I like doom scrolling, snowboarding, and brawlstars.
      </p>
      
      <div className="flex gap-6 flex-wrap">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
          <img src={snow0} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
          <img src={snow1} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
          <img src={snow3} alt="snow" className="w-56 h-36 object-cover rounded-xl" />
        </div>

      </div>
    </section>
  </motion.div>
  )
   {/*Need more pics*/}
}