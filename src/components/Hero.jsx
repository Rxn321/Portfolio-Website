import me from "../assets/me.jpg"

export default function Hero() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 pt-24 gap-8 md:gap-12 text-center md:text-left">

      <div className="max-w-xl">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Hi, I'm Ryan and im an unemployed chud TAT
        </h1>

        <p className="mt-6 text-white/60 text-lg">
          hmmm what do i even put here
        </p>

        <div className="mt-10 flex gap-1 justify-center w-full">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-sky-50 !text-black font-medium hover:scale-105 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="bg-white p-3 pb-6 shadow-xl rotate-[-4deg] hover:rotate-0 transition duration-300">
        <img
          src={me}
          alt="Ryan"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-md shadow-xl"/>
      </div>

    </main>
  )
}