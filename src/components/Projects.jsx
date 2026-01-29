import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'Docurizzer',
            subtitle: 'AI Document Summarizer',
            description: 'Intelligent document summarization tool capable of summarizing text, documents, and images with user-controlled output length. Implemented a Transformer-based NLP pipeline using fine-tuned T5-Small model with interactive Streamlit interface.',
            tech: ['Python', 'T5-Small', 'Hugging Face', 'Streamlit', 'Transformers'],
            github: 'https://github.com/the-carnage/Docurizzer',
            demo: 'https://huggingface.co/spaces/the-carnage/Docurizzer',
            date: 'December 2025',
            featured: true,
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            title: 'Online Compiler',
            subtitle: 'Multi-Language Code Execution',
            description: 'Multi-language online compiler capable of compiling and executing Python, C++, and JavaScript code with custom runtime input. Designed a backend execution engine using child processes with responsive frontend for real-time output.',
            tech: ['React', 'Node.js', 'Express.js', 'Vite', 'Child Processes'],
            github: 'https://github.com/the-carnage/OnlineCompiler',
            demo: '#',
            date: 'December 2025',
            featured: true,
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            title: 'Rozz',
            subtitle: 'Full-Stack Diary Application',
            description: 'Full-stack mobile diary application that allows users to write, read, and manage their daily life entries securely. Developed RESTful APIs for data management with persistent storage and cross-platform mobile interface.',
            tech: ['React Native', 'Express.js', 'SQL', 'REST APIs', 'JWT'],
            github: 'https://github.com/the-carnage/Rozz',
            demo: '#',
            date: 'October 2025',
            featured: true,
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'AIMS',
            subtitle: 'Atlas Interceptor Mission Simulator',
            description: 'Real-time 3D visualization of the solar system with interactive mission planning, spacecraft design, and NASA API integration for accurate planetary data.',
            tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebSocket'],
            github: 'https://github.com/the-carnage/aims_frontend',
            demo: '#',
            date: '2025',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        },
        {
            title: 'GroundStation',
            subtitle: 'Robotics Control Station',
            description: 'Robotics ground control station with serial communication for embedded devices, real-time telemetry display, and hardware control interfaces.',
            tech: ['Electron', 'Node.js', 'JavaScript', 'Serial Port'],
            github: 'https://github.com/the-carnage/GroundStation',
            demo: '#',
            date: '2025',
            gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
        },
        {
            title: 'PlantVerse',
            subtitle: 'Plant Management Application',
            description: 'Plant tracking and management application for garden enthusiasts with growth tracking, watering schedules, and plant care recommendations.',
            tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/the-carnage/PlantVerse',
            demo: '#',
            date: '2025',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        }
    ]

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="projects-subtitle">
                    A selection of projects that showcase my skills and passion
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="project-header"
                                style={{ background: project.gradient }}
                            >
                                <div className="project-header-content">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span className="project-date">{project.date}</span>
                                </div>
                                {project.featured && <span className="featured-badge">Featured</span>}
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link demo-link"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <a
                        href="https://github.com/the-carnage?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All 31+ Projects
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
