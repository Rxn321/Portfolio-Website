export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <div className="flex flex-col items-center gap-4 text-white/70">

        <a href="mailto:liuryanty@gmail.com" className="hover:text-white transition">
          📧
        </a>

        <a
          href="https://www.linkedin.com/in/ryantyl/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Rxn321"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

      </div>
    </section>
  )
}