function App() {
  return (
    <div>
      <nav style={styles.nav}>
      <div style={styles.logo}>Ryan</div>

      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
</nav>

      <section style={styles.hero}>
        <h1>hello</h1>
        <p></p>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>unemployed...💔</p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p>Email: liuryanty@gmail.com</p>
      </section>
    </div>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#383838",
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