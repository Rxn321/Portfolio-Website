import rocket from "../assets/rocket-1.jpg"
export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-semibold">Portfolio Website</h3>
          <p className="text-white/60 text-sm mt-2">React + Tailwind portfolio</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-semibold">Another Website</h3>
          <p className="text-white/60 text-sm mt-2">Another web project</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg hover:scale-101 transition inline-block">
        <img src={rocket} alt="project" className="w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-semibold">Portfolio Website</h3>
          <p className="text-white/60 text-sm mt-2">React + Tailwind portfolio</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-semibold">Another Website</h3>
          <p className="text-white/60 text-sm mt-2">Another web project</p>
        </div>
      </div>

    </section>
  )
}