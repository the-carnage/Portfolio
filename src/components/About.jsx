import './About.css'

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <div className="image-placeholder">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="image-decoration"></div>
                        </div>
                    </div>

                    <div className="about-text">
                        <div className="about-intro glass-card">
                            <h3>Full-Stack Developer & Competitive Programmer</h3>
                            <p className="about-tagline">
                                Specializing in <span className="highlight">Artificial Intelligence</span> &
                                <span className="highlight"> Machine Learning</span>
                            </p>
                            <p className="about-description">
                                I bring a rigorous, algorithm-driven approach to software engineering,
                                experienced in building scalable, data-driven applications and AI-centric
                                tools using Large Language Models (LLMs).
                            </p>
                            <p className="about-description">
                                I have hands-on experience in robotics development, focusing on integrating
                                intelligent software architectures with hardware control systems. Dedicated to
                                translating complex algorithmic problem-solving into efficient, user-centric
                                product design.
                            </p>
                        </div>

                        <div className="education-section">
                            <h3 className="education-heading">Education</h3>

                            <div className="about-education glass-card">
                                <div className="education-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 15l-2 5l-9-9l9-9l9 9l-9 9l-5 2l2-5"></path>
                                    </svg>
                                </div>
                                <div className="education-details">
                                    <h4>NASA Finalist Certificate</h4>
                                    <p className="education-school">NASA Space Apps Challenge</p>
                                    <div className="education-meta">
                                        <span className="education-year">2024</span>
                                        <span className="education-separator">•</span>
                                        <span className="education-cgpa">Finalist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="about-education glass-card">
                                <div className="education-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                                <div className="education-details">
                                    <h4>Bachelor of Technology (AI & ML)</h4>
                                    <p className="education-school">Newton School of Technology (ADYPU), Pune</p>
                                    <div className="education-meta">
                                        <span className="education-year">2024 – 2028</span>
                                    </div>
                                </div>
                            </div>

                            <div className="about-education glass-card">
                                <div className="education-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                </div>
                                <div className="education-details">
                                    <h4>Intermediate (Class XII)</h4>
                                    <p className="education-school">School of Basic Science</p>
                                    <div className="education-meta">
                                        <span className="education-year">2022 – 2023</span>
                                    </div>
                                </div>
                            </div>

                            <div className="about-education glass-card">
                                <div className="education-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                </div>
                                <div className="education-details">
                                    <h4>Matriculation (Class X)</h4>
                                    <p className="education-school">The Phoenix Academy</p>
                                    <div className="education-meta">
                                        <span className="education-year">2020 – 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-interests">
                            <div className="interest-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
                                </svg>
                                <span>AI & LLMs</span>
                            </div>
                            <div className="interest-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Full Stack Development</span>
                            </div>
                            <div className="interest-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                </svg>
                                <span>Robotics & Hardware</span>
                            </div>
                            <div className="interest-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Competitive Programming</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
