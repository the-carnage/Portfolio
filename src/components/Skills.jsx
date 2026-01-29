import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']
        },
        {
            title: 'Web & Backend',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            skills: ['React', 'React Native', 'Node.js', 'Express.js', 'Django', 'REST APIs']
        },
        {
            title: 'Databases',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            ),
            skills: ['MongoDB', 'MySQL', 'Prisma ORM', 'Supabase']
        },
        {
            title: 'AI & Data',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
                    <circle cx="7.5" cy="14.5" r="1.5"></circle>
                    <circle cx="16.5" cy="14.5" r="1.5"></circle>
                </svg>
            ),
            skills: ['NumPy', 'Pandas', 'OpenCV', 'Hugging Face', 'LLMs', 'Matplotlib']
        },
        {
            title: 'DevOps & Tools',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            skills: ['Git', 'GitHub', 'Postman', 'OAuth 2.0', 'Linux']
        },
        {
            title: 'Soft Skills',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            skills: ['Critical Thinking', 'Decision-making', 'Communication', 'Problem Solving']
        }
    ]

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <p className="skills-subtitle">
                    Technologies and tools I work with to bring ideas to life
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="skill-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-card-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="tech-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-extra">
                    <div className="extra-card glass-card">
                        <div className="extra-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                        </div>
                        <div className="extra-content">
                            <h4>Competitive Programming</h4>
                            <p>Active on Codeforces & LeetCode</p>
                        </div>
                    </div>
                    <div className="extra-card glass-card">
                        <div className="extra-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                        </div>
                        <div className="extra-content">
                            <h4>Robotics Experience</h4>
                            <p>End-to-end robotic system development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
