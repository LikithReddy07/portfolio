
import "./../css/TechStack.css"; // Create and import CSS later

const TechStack = () => {
  // Placeholder data - replace with actual tech stack
  const tech = {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    Frameworks: ['Spring Boot', 'React', 'Node.js'],
    Cloud: ['AWS', 'Azure'],
    DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Automation: ['Selenium', 'UiPath'],
    Tools: ['Jira', 'Confluence'],
  };

  return (
    <section id="tech-stack" style={{ padding: '50px 0', textAlign: 'center' }}>
      <h2>Tech Stack</h2>
      {Object.entries(tech).map(([category, items]) => (
        <div key={category} style={{ margin: '20px 0' }}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {items.map((item) => (
              <span key={item} style={{ border: '1px solid #ccc', padding: '5px 10px', borderRadius: '15px', background: '#f0f0f0' }}>
                {/* Add logos later if desired */}
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
