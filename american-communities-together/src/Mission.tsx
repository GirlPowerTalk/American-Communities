import './App.css'

function MissionPage() {
  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand" aria-label="American Communities Together home"><img className="mark" src="/logo.png" alt="" /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About</a><a className="active" href="/mission">Our Mission</a><a href="/events">Events</a></nav>
        <a className="header-cta" href="#connect">Connect with us</a>
      </header>
      <section className="mission-hero" aria-labelledby="mission-heading">
        <div className="mission-hero-content">
          <h1 id="mission-heading">Supporting communities with identity and history</h1>
          <p>Our mission is to support communities with distinct histories and identities by helping them preserve what matters,<br className="mission-line-break" /> advocate for their interests, and connect with resources that can strengthen local life.</p>
          <p>Through listening, convening, education, and connections, ACT works to give communities more options and more voice.</p>
        </div>
      </section>
      <section className="vision-section" aria-labelledby="vision-heading">
        <div className="vision-intro">
          <h2 id="vision-heading">Our vision</h2>
          <p className="vision-lead">An America where communities are seen and heard</p>
          <p>We envision an America in which communities of every size, incorporated or not, are recognized, and equipped to influence the decisions<br className="vision-line-break" /> that affect them.</p>
        </div>
        <div className="vision-grid">
          <article className="vision-card vision-card-identity"><p>Community identity is treated as a public good worth preserving.</p></article>
          <article className="vision-card vision-card-growth"><p>Growth and development are guided by local needs, not just outside interests.</p></article>
          <article className="vision-card vision-card-choice"><p>Communities are not forced to choose between survival and erasure.</p></article>
          <article className="vision-card vision-card-place"><p>Stories of place, from small towns to historic neighborhoods, are understood as essential parts of national life, not footnotes.</p></article>
        </div>
        <p className="vision-closing">We believe communities should be able to protect what makes them unique while still having pathways to grow, welcome new<br className="vision-line-break" /> residents, and adapt to changing circumstances.</p>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/footerLogo.png" alt="" /><span>American Communities Together</span></div>
            <a href="mailto:communitiestogether.us"><span aria-hidden="true">✉</span>communitiestogether.us</a>
            <a href="tel:+155526472489"><span aria-hidden="true">☎</span>+1 (555) AMER-CITY</a>
          </div>
          <div className="footer-links"><h3>Quick Links</h3><a href="/">Home</a><a href="/about">About</a></div>
          <div className="footer-links"><h3>Get Started</h3><a href="/mission">Our Mission</a><a href="/events">Events</a></div>
        </div>
        <div className="footer-copyright">© 2026 Eminent Domain. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default MissionPage
