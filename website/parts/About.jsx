import { aboutSummary } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'
import { PageSection } from './PageSection.jsx'

const focusItems = [
  {
    title: 'Support problems become clear steps',
    description:
      'I break issues down, identify what changed, and avoid guessing before checking the basics.',
  },
  {
    title: 'Interfaces should be easy to scan',
    description:
      'I care about spacing, readable text, and simple flows because hiring managers and users should not fight the page.',
  },
  {
    title: 'I test before I hand things off',
    description:
      'I use builds, manual checks, and feedback loops to catch obvious problems before showing the work.',
  },
]

export function About() {
  return (
    <PageSection
      id="about"
      eyebrow="About Me"
      title="Grounded IT learner with support-first thinking"
      description={aboutSummary}
    >
      <div className="about-grid">
        {focusItems.map((item) => (
          <article className="info-card reveal" key={item.title}>
            <Icon name="check" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </PageSection>
  )
}
