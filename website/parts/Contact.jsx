import { useState } from 'react'
import { profile } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'
import { PageSection } from './PageSection.jsx'

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', href: profile.githubUrl, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedinUrl, icon: 'linkedin' },
]

export function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`

    try {
      window.location.href = mailto
      setStatus('Opening your mail client to send the message...')
    } catch (err) {
      setStatus('This demo form is frontend-only. Please contact me through email or social links.')
    }
  }

  return (
    <PageSection
      id="contact"
      eyebrow="Contact"
      title="Available for OJT and entry-level IT opportunities"
      description="For resume requests, interviews, or project discussions, use the links below or the frontend contact form."
    >
      <div className="contact-layout">
        <div className="contact-panel reveal">
          <h3>Contact Details</h3>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                <Icon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="your.email@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message" required />
          </label>
          <button className="btn btn-primary" type="submit">
            <Icon name="send" />
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </PageSection>
  )
}
