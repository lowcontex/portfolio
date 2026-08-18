import { currentFocus, heroSignals, profile } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'

export function HomeIntro() {
  return (
    <section className="hero section-pad" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal is-visible">
          <p className="eyebrow">4th-year BSIT portfolio</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-signals" aria-label="Quick hiring signals">
            {heroSignals.map((signal) => (
              <div className="signal-card" key={signal.value}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <Icon name="download" />
              Download Resume
            </a>
            <a className="btn btn-secondary" href="#contact">
              <Icon name="mail" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="student-board reveal is-visible" aria-label="Student workspace summary">
          <div className="board-topline">
            <span className="student-avatar">MJ</span>
            <div>
              <p>Portfolio Snapshot</p>
              <strong>OJT / Entry-level IT</strong>
            </div>
          </div>

          <div className="notebook-panel">
            <span className="note-label">Current focus</span>
            <ul>
              {currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="workflow-strip" aria-label="Work process">
            <span>Plan</span>
            <span>Build</span>
            <span>Test</span>
            <span>Improve</span>
          </div>

          <div className="status-row">
            <span className="status-dot" />
            <span>Available for learning-focused roles</span>
          </div>
        </div>
      </div>
    </section>
  )
}
