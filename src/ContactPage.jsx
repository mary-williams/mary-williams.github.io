import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function ContactPage() {
  return (
    <div className="contact-container">
      {/* Left side */}
      <div className="contact-left">
        <div className='title'>
          <h1>Contact Me</h1>
        </div>
        <div className='subtext'>
          <p>Send me a message and I'll get back to you soon!</p>
        </div>
        <div className='Email'>
          <button>marywilliams@utexas.edu</button>
        </div>
        <div className='Socials'>
        <a
          href="https://www.linkedin.com/in/mary-williams-383a6728b"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="LinkedIn"
        >
          {/* LinkedIn SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
          </svg>
        </a>
        <a
          href="https://github.com/mary-williams"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="GitHub"
        >
          {/* GitHub SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
      </div>

      {/* Right side */}
      <div className="contact-right">
        <form className='contact-form'>
          <label>
            First Name
            <input type="text" name="firstName" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage