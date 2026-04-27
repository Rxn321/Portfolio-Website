function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <h2>Ryan</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1>Hi, I'm Ryan 👋</h1>
        <p>IT student & aspiring developer</p>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>I build websites and work with tech.</p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </div>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#111",
    color: "white"
  },
  hero: {
    padding: "100px 20px",
    textAlign: "center"
  },
  section: {
    padding: "60px 20px"
  }
}

export default App