export function PageSection({ id, eyebrow, title, description, children }) {
  return (
    <section className="section-pad" id={id}>
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
