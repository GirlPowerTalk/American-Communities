import './App.css'

function EventsPage() {
  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand" aria-label="American Communities Together home"><img className="mark" src="/logo.png" alt="" /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About</a><a href="/mission">Our Mission</a><a className="active" href="/events">Events</a></nav>
        <a className="header-cta" href="#connect">Connect with us</a>
      </header>
      <section className="mission-hero events-hero" aria-labelledby="events-heading">
        <div className="mission-hero-content">
          <h1 id="events-heading">Calendar of Events</h1>
          <p>American Communities Together believes communities grow stronger when they learn from one another. Our events and convenings are designed to bring together local leaders, residents, advocates, and partners to share experiences, explore options, and build collective knowledge.</p>
          <p>This page highlights upcoming gatherings, workshops, and conversations focused on small towns, historic places, and self-identified communities across the country.</p>
        </div>
      </section>
      <section className="events-block" aria-labelledby="events-block-heading">
        <h2 id="events-block-heading">Events Block</h2>
        <div className="events-card-grid">
          <article className="events-card events-card-voices"><p>Community Voices Roundtable</p></article>
          <article className="events-card events-card-workshop"><p>Small Town Advocacy Workshop</p></article>
          <article className="events-card events-card-listening"><p>Listening Session</p></article>
          <article className="events-card events-card-convening"><p>Regional Community Convening</p></article>
        </div>
        <div className="municipal-feature">
          <img src="/municipalexpertservices.png" alt="Municipal Expert Services" />
          <div>
            <h2>Municipal Expert Services: Our Sister Organization</h2>
            <p>American Communities Together focuses on listening, advocacy, dialogue, and convening. Some communities, however, also need practical implementation support. This is where MES comes in.</p>
          </div>
        </div>
      </section>
      <section className="mes-services" aria-labelledby="mes-services-heading">
        <div className="mes-services-inner">
          <div className="mes-services-copy">
            <h2 id="mes-services-heading">How Municipal Expert Services<br />fits in</h2>
            <p>Municipal Expert Services offers specialized services to communities, municipalities, and related entities. MES provides professional support on a fee basis, often at a reduced rate for communities that align with ACT’s mission.</p>
          </div>
          <div className="mes-services-list">
            <p>Communities may choose to work with MES when they want help with tasks such as:</p>
            <ul>
              <li>Designing and launching a community website.</li>
              <li>Structuring outreach materials or public communication strategies.</li>
              <li>Organizing and documenting certain projects or initiatives.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="nonprofit-focus" aria-labelledby="nonprofit-focus-heading">
        <div className="nonprofit-focus-inner">
          <div className="nonprofit-focus-copy">
            <h2 id="nonprofit-focus-heading">Maintaining our nonprofit focus</h2>
            <p>Even as we collaborate with a sister organization, ACT remains committed to its nonprofit identity and purpose. Our primary responsibilities are:</p>
            <p>Any introduction to Municipal Expert Services is made in service of these goals, and communities retain full choice over whether and how to pursue external services.</p>
          </div>
          <div className="nonprofit-focus-list">
            <p>Our primary responsibilities are:</p>
            <ul>
              <li>Listening to communities.</li>
              <li>Helping them understand and articulate their own identity and priorities.</li>
              <li>Supporting their advocacy and voice.</li>
              <li>Convening spaces for learning and dialogue.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="events-cta-section" aria-labelledby="events-cta-heading">
        <div className="events-cta-panel">
          <h2 id="events-cta-heading">Call to Action</h2>
          <p>If you believe your community could benefit from both advocacy support and practical services, we invite you to contact ACT first.<br className="events-cta-break" /> We will listen, help you clarify your needs, and then discuss whether a connection to Municipal Expert Services or another partner<br className="events-cta-break" /> makes sense for you.</p>
          <a className="events-cta-button" href="mailto:hello@americancommunitiestogether.org">Contact Us</a>
        </div>
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

export default EventsPage
