import { certifications, highlights, profile, skillCategories } from "./profileData";

export default function App() {
  return (
    <div className="app">
      <main className="content">
        <header className="hero card">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.summary}</p>
            <p className="muted">{profile.location}</p>
          </div>

          <nav className="quick-links" aria-label="Social links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.links.portfolio} target="_blank" rel="noreferrer">Website</a>
          </nav>
        </header>

        <section className="card">
          <h3>Technical Stack</h3>
          <div className="skill-category-grid">
            {skillCategories.map((category) => (
              <article key={category.title} className="skill-category">
                <h4>{category.title}</h4>
                <div className="chip-grid">
                  {category.items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <h3>Experience Summary</h3>
          <ul>
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </section>

        <section className="card contact">
          <h3>Contact</h3>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </p>
          <p>
            <a href={profile.links.codepen} target="_blank" rel="noreferrer">CodePen</a>
            <span> | </span>
            <a href={profile.links.stackoverflow} target="_blank" rel="noreferrer">Stack Overflow</a>
          </p>
        </section>
      </main>
    </div>
  );
}
