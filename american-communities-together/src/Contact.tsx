import './App.css'

function ContactPage() {
  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand" aria-label="American Communities Together home"><img className="mark" src="/logo.png" alt="" /><span>American Communities Together</span></a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About</a><a href="/mission">Our Mission</a><a href="/events">Events</a><a className="active" href="/contact">Contact Us</a></nav>
        <a className="header-cta" href="/contact">Connect with us</a>
      </header>
      <section className="mission-hero events-hero" aria-labelledby="contact-heading">
        <div className="mission-hero-content">
          <h1 id="contact-heading">We would love to hear from you.</h1>
          <p>Whether you represent a small town, a historic neighborhood, an unincorporated community, or a local organization, American Communities Together is here to listen.</p>
          <p>Tell us about your community, the challenges you’re facing, and how we might help. Our team will learn about your needs and explore ways to support you.</p>
        </div>
      </section>
      <section className="get-in-touch" aria-labelledby="get-in-touch-heading">
        <div className="get-in-touch-inner">
          <div className="get-in-touch-details">
            <h2 id="get-in-touch-heading">Get in Touch</h2>
            <div className="get-in-touch-image" role="img" aria-label="Community gathering" />
            <dl className="contact-details-list">
              <div><dt><img className="contact-detail-icon" src="/contact-email-icon.png" alt="" />Email</dt><dd>communitiestogether.us</dd></div>
              <div><dt><img className="contact-detail-icon" src="/contact-phone-icon.png" alt="" />Phone</dt><dd>+1 (555) AMER-CITY</dd></div>
              <div><dt><img className="contact-detail-icon" src="/contact-response-icon.png" alt="" />Response Time</dt><dd>Within 48 hours</dd></div>
            </dl>
            <blockquote>“ Your community matters. Let’s start a conversation. ”</blockquote>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <h2>Have a question or want to start a conversation?</h2>
            <p>Reach out to us.</p>
            <div className="contact-name-fields">
              <label>First Name *<input name="firstName" required /></label>
              <label>Last Name *<input name="lastName" required /></label>
            </div>
            <label>Email *<input type="email" name="email" required /></label>
            <label>Community or Organization *<input name="community" required /></label>
            <label>Subject *<input name="subject" required /></label>
            <label className="contact-message-field">How Can We Help You? *<textarea name="message" required /></label>
            <small>* All fields are required.</small>
            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
