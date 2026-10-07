function AboutPage() {
  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand" aria-label="American Communities Together home"><img className="mark" src="/logo.png" alt="" /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a className="active" href="/about">About</a><a href="/mission">Our Mission</a><a href="/events">Events</a></nav>
        <a className="header-cta" href="#connect">Connect with us</a>
      </header>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About American Communities Together</h1>
          <p>American Communities Together (ACT) is a nonprofit organization dedicated to supporting communities of every size that have a history, a shared identity, and a desire to shape their own future.</p>
          <p>Some of the communities we serve are legally incorporated municipalities. Others are neighborhoods, historic districts, or unincorporated areas that may not appear as dots on the map or in formal government registries. All of them are real places defined by the people who live there.</p>
          <div className="hero-actions"><a className="button button-primary" href="mailto:hello@americancommunitiestogether.org">Request a Consultation</a><a className="button button-secondary" href="#team">Meet the Team</a></div>
        </div>
      </section>
      <section className="purpose-section">
        <div className="purpose-column">
          <div className="purpose-title"><span className="purpose-icon" aria-hidden="true">⚒</span><h2>Our Purpose</h2></div>
          <h3>Honoring self-identified communities</h3>
          <p>ACT offers a simple promise: we trust communities to define themselves.</p>
          <p>Our work centers on listening, convening, and helping communities find language and strategies that can be understood by policymakers, partners, and the broader public.</p>
        </div>
        <div className="purpose-focus">
          <p>We focus on communities that:</p>
          <ul>
            <li>Carry a name and a story, even if they lack formal municipal status.</li>
            <li>Have seen their identity challenged or diminished by external pressures.</li>
            <li>Want help expressing who they are, what they value, and where they hope to go.</li>
            <li>Seek stronger connections to resources, expertise, and advocacy channels.</li>
          </ul>
        </div>
      </section>
      <section className="difference-section">
        <div className="difference-column">
          <h2>What makes ACT different</h2>
          <h3>More than services: a space for dialogue</h3>
          <p>ACT is designed to be a space for listening, dialogue, and connection.</p>
          <p>We see convening and conversation as central to strong advocacy. Communities amplify their voice when they understand that they are not alone and that others face similar pressures and choices.</p>
        </div>
        <div className="difference-focus">
          <p>Rather than defining communities narrowly or approaching them only as clients, we focus on:</p>
          <ul>
            <li>Hearing multiple perspectives from within a community.</li>
            <li>Creating forums where communities can talk with each other, not just with us.</li>
            <li>Encouraging shared learning through stories, experiences, and local examples.</li>
            <li>Helping community leaders feel less alone in the challenges they face.</li>
          </ul>
        </div>
      </section>
      <section className="forms-section">
        <div className="forms-intro"><h2>We serve communities in many forms</h2><p>ACT is open to working with:</p></div>
        <div className="forms-grid">
          <article className="form-card form-city"><p>Incorporated cities and towns seeking to preserve or revitalize their identity.</p></article>
          <article className="form-card form-unincorporated"><p>Unincorporated communities with recognizable names and historic roots.</p></article>
          <article className="form-card form-neighborhood"><p>Neighborhoods or districts facing significant change in land use, population, or ownership.</p></article>
          <article className="form-card form-organizations"><p>Community organizations, local associations, and informal groups that act as stewards of place.</p></article>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/footerLogo.png" alt="" /><span>American Communities Together</span></div>
            <a href="mailto:communitiestogether.us"><span aria-hidden="true">✉</span>communitiestogether.us</a>
            <a href="tel:+155526472489"><span aria-hidden="true">⌕</span>+1 (555) AMER-CITY</a>
          </div>
          <div className="footer-links"><h3>Quick Links</h3><a href="/">Home</a><a href="/about">About</a></div>
          <div className="footer-links"><h3>Get Started</h3><a href="/#mission">Our Mission</a><a href="/#events">Events</a></div>
        </div>
        <div className="footer-copyright">© 2026 Eminent Domain. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default AboutPage
