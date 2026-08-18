import { experience } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'
import { PageSection } from './PageSection.jsx'

export function Experience() {
  return (
    <PageSection
      id="experience"
      eyebrow="Experience"
      title={experience.title}
      description="Hands-on support experience from personal and freelance troubleshooting work."
    >
      <article className="timeline-card reveal">
        <div className="timeline-marker" aria-hidden="true" />
        <div>
          <div className="timeline-heading">
            <h3>{experience.role}</h3>
            <span>{experience.date}</span>
          </div>
          <ul className="check-list">
            {experience.items.map((item) => (
              <li key={item}>
                <Icon name="check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </PageSection>
  )
}
