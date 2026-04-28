
import snow0 from "../assets/snow-0.jpg"
import snow1 from "../assets/snow-1.PNG"
export default function About() {
  return (
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
      </div>
    </section>
  )
   {/*Need more pics*/}
}