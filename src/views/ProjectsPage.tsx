
import "./../css/ProjectsPage.css"; // Create and import CSS later

// Placeholder project data
const projects = [
  { id: 1, title: 'Project Alpha', description: 'Problem, solution, tech used...', github: '#', demo: '#', tags: ['#SpringBoot', '#AWS'] },
  { id: 2, title: 'Automation Bot Beta', description: 'Problem, solution, tech used...', github: '#', demo: '#', tags: ['#Python', '#Selenium'] },
  // Add more projects
];

const ProjectsPage = () => {
  return (
    <section id="projects" style={{ padding: '50px 0', textAlign: 'center' }}>
      <h2>Projects</h2>
      {/* Add filters/tabs later */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {projects.map(project => (
          <div key={project.id} style={{ border: '1px solid #eee', padding: '20px', width: '300px', textAlign: 'left' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tags.map(tag => <span key={tag} style={{ marginRight: '5px', fontSize: '0.8em', background: '#e0e0e0', padding: '2px 5px', borderRadius: '3px' }}>{tag}</span>)}
            </div>
            <div style={{ marginTop: '10px' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
