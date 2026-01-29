import './Hero.css'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-gradient-orb hero-orb-1"></div>
                <div className="hero-gradient-orb hero-orb-2"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Mehebub Alom</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Full Stack Developer & AI/ML Enthusiast
                    </h2>

                    <p className="hero-description">
                        Full-stack developer and competitive programmer with a rigorous, algorithm-driven
                        approach to software engineering. Experienced in building scalable, data-driven
                        applications and AI-centric tools using Large Language Models (LLMs).
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">31+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">8.2</span>
                            <span className="stat-label">CGPA</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
