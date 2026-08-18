import { skillGroups } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'
import { PageSection } from './PageSection.jsx'

function SkillCard({ group }) {
  return (
    <article className="skill-card reveal">
      <div className="skill-card-header">
        <Icon name={group.title.includes('Technical') ? 'support' : 'code'} />
        <h3>{group.title}</h3>
      </div>
      <div className="skill-list">
        {group.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  )
}

export function Skills() {
  return (
    <PageSection
      id="skills"
      eyebrow="Skills"
      title="Support fundamentals with modern development tools"
      description="A practical mix of troubleshooting, web fundamentals, AI-assisted workflow experience, and workplace-ready soft skills."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillCard group={group} key={group.title} />
        ))}
      </div>
    </PageSection>
  )
}
