import './App.css'
import AboutPage from './About'
import MissionPage from './Mission'
import EventsPage from './Events'

function Mark() {
  return <img className="mark" src="/logo.png" alt="" />
}

function App() {
  if (window.location.pathname === '/about') return <AboutPage />
  if (window.location.pathname === '/mission') return <MissionPage />
  if (window.location.pathname === '/events') return <EventsPage />

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="American Communities Together home"><Mark /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="/about">About</a><a href="/mission">Our Mission</a><a href="/events">Events</a></nav>
        <a className="header-cta" href="#connect">Connect with us</a>
      </header>
      <section className="hero" id="home">
        <div className="hero-inner">
          <img className="community-image" src="/heroimg.jpg" alt="A quiet street in a small American community" />
          <div className="hero-copy">
            <h1>American Communities Together</h1>
            <p className="intro">Supporting small towns and self-identified communities with advocacy, dialogue, and practical help.</p>
            <p>Not every community shows up neatly on a map. While some communities have become towns with a corporate charter, others may be historic neighborhoods or unincorporated communities with deep roots and a shared identity. American Communities Together exists to help these communities preserve what makes them distinct, strengthen their voice, and connect with the resources they need to thrive.</p>
            <div className="hero-actions"><a className="button button-primary" href="#connect">Connect With ACT</a><a className="button button-secondary" href="#mission">Explore Our Mission</a></div>
          </div>
        </div>
      </section>
      <section className="community-section" id="about">
        <div className="community-inner">
          <div className="community-content">
            <h2>Every community deserves to be heard</h2>
            <div className="community-text">
              <p>A community does not have to be a legal municipality to matter. It may or may not have a city hall, a zip code, or formally elected officials; but it has people, history, traditions, and a name that means something to those who live there.</p>
              <p>From rural towns losing population and trying to attract workers and residents, to seaside tourist havens facing intense development pressure, communities across America are going through change that can either strengthen or erase local identity. ACT is here to help communities meet that change on their own terms.</p>
            </div>
          </div>
          <img className="community-photo" src="/community.jpg" alt="A welcoming downtown community street" />
        </div>
      </section>
      <section className="help-section" id="mission">
        <div className="help-intro">
          <h2>How ACT helps</h2>
          <p>We listen, then help communities act.<br />American Communities Together supports self-identified communities in several ways:</p>
        </div>
        <div className="help-grid">
          <article className="help-card advocacy"><h3>Advocacy and voice</h3></article>
          <article className="help-card identity"><h3>Identity and preservation</h3></article>
          <article className="help-card dialogue"><h3>Convenings and dialogue</h3></article>
          <article className="help-card education"><h3>Education and resources</h3></article>
          <article className="help-card support"><h3>Connections to practical support</h3></article>
        </div>
        <p className="help-closing">Throughout all of this, our starting point is simple: if you are a community, we take your word for it. We honor your identity, we listen first, and we work alongside you.</p>
      </section>
      <section className="stance-section">
        <div className="stance-panel">
          <h2>Our stance on change and development</h2>
          <p>Many communities today face intense pressure from hyper-development and large-scale projects that can reshape or even erase local life. Homes, ecosystems, and historic places can disappear quickly, replaced by manufactured neighborhoods that may carry a name but not yet a lived identity.</p>
          <p>ACT believes that growth should be consistent with the needs and values of the community itself. When a community needs families, children, housing, and renewed population, we support efforts to attract good-faith developers who respect local context and the environment. When a community is being asked to trade its forest, its streets, or its heritage for projects it does not need, we believe it should have the voice and tools to resist.</p>
          <p>We offer to stand with communities as they decide what kind of future they want, and to help ensure that decisions about land, housing, and public investment recognize the human identity already present in these places.</p>
        </div>
      </section>
      <section className="national-section" id="connect">
        <div className="national-inner">
          <img className="national-photo" src="/Perspective.jpg" alt="A civic building in an American community" />
          <div className="national-content">
            <h2>A national perspective</h2>
            <p>Communities together, across America</p>
            <p>American Communities Together is national in scope. We recognize communities everywhere, from incorporated cities and towns to unincorporated places with names, histories, and longstanding organizations.</p>
            <p>Whether a community is facing eminent domain challenges, population loss, development pressure, or simply wants help expressing who it is, we aim to serve as a listening ear, a convening space, and an advocacy partner.</p>
            <p className="national-emphasis">If you see your town or community in this description, we invite you to reach out. Tell us your story. Let us know what you need. We are here to help.</p>
            <a className="national-cta" href="mailto:hello@americancommunitiestogether.org">Contact Us</a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/footerLogo.png" alt="" /><span>American Communities Together</span></div>
            <a href="mailto:communitiestogether.us"><span aria-hidden="true">✉</span>communitiestogether.us</a>
            <a href="tel:+155526472489"><span aria-hidden="true">⌕</span>+1 (555) AMER-CITY</a>
          </div>
          <div className="footer-links"><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About</a></div>
          <div className="footer-links"><h3>Get Started</h3><a href="#mission">Our Mission</a><a href="#events">Events</a></div>
        </div>
        <div className="footer-copyright">© 2026 Eminent Domain. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default App
