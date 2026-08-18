import { projects } from '../content/portfolioContent.js'
import { Icon } from './Icon.jsx'
import { PageSection } from './PageSection.jsx'

function ProjectVisual({ accent, title }) {
  return (
    <div className={`project-visual ${accent}`} aria-label={`${title} thumbnail`}>
      <div className="visual-window">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-lines">
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function ProjectCard({ project, isDuplicate = false }) {
  return (
    <article className="project-card" aria-hidden={isDuplicate}>
      <ProjectVisual accent={project.accent} title={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="badge-row">
          {project.tech.map((item) => (
            <span className="badge" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a className="small-button" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Icon name="github" />
            GitHub
          </a>
          {project.demoUrl && project.demoUrl !== '#' ? (
            <a className="small-button" href={project.demoUrl} target="_blank" rel="noreferrer">
              <Icon name="external" />
              Live Demo
            </a>
          ) : (
            <span className="small-button is-disabled">
              <Icon name="external" />
              Demo Soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects]

  return (
    <PageSection
      id="projects"
      eyebrow="Projects"
      title="Practical work and support experience"
      description="A realistic snapshot of student-level development work and hands-on IT support practice."
    >
      <div className="projects-carousel reveal" aria-label="Portfolio projects">
        <div className="projects-track">
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              isDuplicate={index >= projects.length}
              key={`${project.title}-${index}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </PageSection>
  )
}
