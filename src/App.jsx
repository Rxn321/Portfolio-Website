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
        <h1>Hi, I'm Ryan</h1>
        <p>Mathematics Student at UBC</p>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>Unemployed...💔</p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>Projects</h2>

        <div style={styles.card}></div>
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
  },
  card: {
  background: "#696969",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px"
}
}


export default App