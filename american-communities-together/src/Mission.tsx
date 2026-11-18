import './App.css'

function MissionPage() {
  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand" aria-label="American Communities Together home"><img className="mark" src="/logo.png" alt="" /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About</a><a className="active" href="/mission">Mission & Vision</a><a href="/events">Events</a><a href="/contact">Contact Us</a></nav>
        <a className="header-cta" href="/contact">Connect with us</a>
      </header>
      <section className="mission-section" aria-labelledby="mission-heading">
        <div className="mission-content">
          <div className="mission-title"><span className="mission-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2v4M22 12h-4M12 22v-4M2 12h4" /><path d="m15 9-3 3" /></svg></span><h2 id="mission-heading">Our Mission</h2></div>
          <h3>Supporting communities with identity and history</h3>
          <p className="mission-intro">Our mission is to support communities with distinct histories and identities by helping them preserve what matters, advocate for their interests, and connect with resources that can strengthen local life.</p>
          <p className="mission-priority">We prioritize communities that:</p>
          <div className="mission-priority-grid">
            <article className="mission-priority-card mission-pressure"><p>Face pressure from development, eminent domain, or other forms of overreach.</p></article>
            <article className="mission-priority-card mission-population"><p>Are losing population and want to attract residents, workers, and families.</p></article>
            <article className="mission-priority-card mission-communication"><p>Need clearer ways to communicate who they are and why they matter.</p></article>
            <article className="mission-priority-card mission-guidance"><p>Seek guidance on navigating complex systems of law, zoning, and funding.</p></article>
          </div>
          <p className="mission-closing">Through listening, convening, education, and connections, ACT works to give communities more options and more voice.</p>
        </div>
      </section>
      <section className="vision-section" aria-labelledby="vision-heading">
        <div className="vision-intro">
          <div className="vision-title"><span className="vision-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></svg></span><h2 id="vision-heading">Our Vision</h2></div>
          <h3 className="vision-lead">An America where communities are seen and heard</h3>
          <p>We envision an America in which communities of every size, incorporated or not, are recognized, and equipped to influence the decisions that affect them.</p><br className="vision-line-break" />
          <span className="vision-vision-statement"><strong>In this vision:</strong></span>
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
