export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
        Hi, I'm Ryan and im an unemployed chud TAT
      </h1>

      <p className="mt-6 text-white/60 text-lg max-w-xl">
        I'm a second year mathematics student at the University of British Columbia.
        i like doom scrolling.
      </p>

      <div className="mt-10 flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-full bg-sky-50 !text-black font-medium hover:scale-105 transition">
          View Projects
        </a>
      </div>
    </main>
  )
}