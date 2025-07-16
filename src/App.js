import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const video = document.getElementById('morphing-video');
    const homeSection = document.getElementById('home');
    
    const handleScroll = () => {
      if (!video || !homeSection) return;
      
      const scrollY = window.scrollY;
      const sectionTop = homeSection.offsetTop;
      const sectionHeight = homeSection.offsetHeight;
      
      // Calculate scroll progress within the home section (0 to 1)
      const scrollProgress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );
      
      // Transform calculations
      const scale = 1 - (scrollProgress * 0.15); // Scale from 1 to 0.85 (less aggressive)
      const borderRadius = scrollProgress * 35; // Border radius from 0 to 35px (more curved)
      const translateY = scrollProgress * 20; // Move down slightly (less movement)
      
      // Apply transforms
      video.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      video.style.borderRadius = `${borderRadius}px`;
      video.style.transition = 'none'; // Remove transition for smooth scroll
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Hello, I am Manish</h2>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#certifications" className="nav-link">Certifications</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="section-content">
          <video 
            id="morphing-video"
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            src="./videos/metallic-liquid.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-container">
            <div className="about-profile-space">
              <img 
                src="./videos/ProfilePic.jpeg" 
                alt="Manish Nadendla" 
                className="profile-image"
              />
            </div>
            <div className="about-box">
              <p>
                Hi, I'm <strong>Manish Nadendla</strong>, a Computer Science senior at UT Dallas. 
                I love solving real-world problems through code, systems, and security. From software 
                development to cybersecurity and IT, I've worked on diverse projects and earned 
                certifications along the way.
              </p>
              <p>
                I'm passionate about learning, building, and making a difference through tech. 
                While I am not coding, I love playing tennis, hiking and exploring nature.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/manishnadendla/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/manjov123" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:manishnadendla@gmail.com" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="get-in-touch">
            <h3>Get in Touch with me!</h3>
            <p>I'm always open to new opportunities and collaborations!</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-timeline">
            {/* Software Engineering Intern */}
            <div className="experience-item">
              <div className="experience-date">
                <span>May 2025 - July 2025</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">Software Engineering Intern | Swing Phi</h3>
                <ul className="experience-description">
                  <li>Participated in full SDLC and built a modern financial dashboard web application using React, Vite and Tailwind CSS enabling 1000+ users to track, view stock insights and receive real time market for 500+ stocks.</li>
                  <li>Implemented multi-page navigation with React Router, designed reusable UI components and ensured pixel-perfect layouts based on Figma specifications.</li>
                  <li>Developed backend services with Node.js and Express, integrating live financial data from Charles Schwab APIs to power analytics and insights.</li>
                  <li>Collaborated on MongoDB database schema design for storing user profiles, subscription status and financial data.</li>
                  <li>Utilized Git and GitHub for version control, code reviews and collaborative development in an Agile/Scrum environment.</li>
                </ul>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>

            {/* Software Developer */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Feb 2025 - Jun 2025</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">Software Developer (BioTech Club Project) | Etched Quality Care</h3>
                <ul className="experience-description">
                  <li>Worked with Etched Quality Care and developed an AI-powered wearable device for real-time health monitoring and predictive analysis of critical events like heart attacks and strokes.</li>
                  <li>Supported system troubleshooting, documentation, and end-user integration planning.</li>
                  <li>Utilizing advanced AI models with TensorFlow/PyTorch analyze data and detect early warning signs with high accuracy.</li>
                  <li>Applied collaborative development using Git, Office tools, and weekly team presentations.</li>
                </ul>
                <div className="tech-tags">
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>

            {/* Research Assistant */}
            <div className="experience-item">
              <div className="experience-date">
                <span>Dec 2024 - Apr 2024</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">Undergraduate Research Assistant | University of Texas at Dallas</h3>
                <ul className="experience-description">
                  <li>Contributed to a research project focused on RISC-V bug detection and analysis, supporting a team of four researchers.</li>
                  <li>Analyzing interpretability methods by comparing correctly predicted vs mis predicted data.</li>
                  <li>Analyzed and categorized 300+ numerical bug reports from GitHub repositories for model training and benchmarking.</li>
                  <li>Built team documentation and analysis tables using Excel and Google Sheets.</li>
                  <li>Enhancing debugging processes through structured analysis and classification.</li>
                </ul>
                <div className="tech-tags">
                  <span className="tech-tag">RISC-V</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Excel</span>
                  <span className="tech-tag">Google Sheets</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-content">
          <h2>Technical Skills</h2>
          
          <div className="skills-category">
            <div className="category-header">
              <h3>Programming Languages</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon-large" />
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-icon-large" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="skill-icon-large" />
                <span className="skill-name">C++</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="skill-icon-large" />
                <span className="skill-name">SQL</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-icon-large" />
                <span className="skill-name">HTML</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-icon-large" />
                <span className="skill-name">CSS</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon-large" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" alt="PowerShell" className="skill-icon-large" />
                <span className="skill-name">PowerShell</span>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <div className="category-header">
              <h3>Platforms</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Kali Linux" className="skill-icon-large" />
                <span className="skill-name">Kali Linux</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" className="skill-icon-large" />
                <span className="skill-name">Windows</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="MacOS" className="skill-icon-large" />
                <span className="skill-name">MacOS</span>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <div className="category-header">
              <h3>Frameworks & Methodologies</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-icon-large" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon-large" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Agile" className="skill-icon-large" />
                <span className="skill-name">Agile</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Scrum" className="skill-icon-large" />
                <span className="skill-name">Scrum</span>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <div className="category-header">
              <h3>Databases</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-icon-large" />
                <span className="skill-name">MySQL</span>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <div className="category-header">
              <h3>Tools</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-icon-large" />
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="skill-icon-large" />
                <span className="skill-name">Power BI</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="Office 365" className="skill-icon-large" />
                <span className="skill-name">Office 365</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-icon-large" />
                <span className="skill-name">GitHub</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="skill-icon-large" />
                <span className="skill-name">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-content">
          <h2>Projects</h2>
          <div className="projects-container">
            <div className="project-item">
              <a href="https://github.com/CS-3354-Srimathi-Group-5/FlightTracker-" target="_blank" rel="noopener noreferrer" className="project-image-container">
                <img src="./images/flight-tracker-new-screenshot.png" alt="Flight Tracker Screenshot" className="project-image" />
                <div className="project-image-placeholder">
                </div>
              </a>
              <div className="project-details">
                <div className="project-header">
                  <h3 className="project-title">Flight Tracker | DFW Airport</h3>
                  <span className="project-date">Sep - Dec 2024</span>
                </div>
                <p className="project-description">
                  Collaborated with a team to develop a full stack flight tracker application displaying live data for 100-200 flights at DFW airport. Built React front-end and Node.js back-end with MySQL database. Implemented sorting, filtering, and real-time updates to enhance user experience with comprehensive flight tracking capabilities.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">API Integration</span>
                </div>
                <button className="demo-button">Demo</button>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image-container">
                <div className="project-image-placeholder">
                </div>
              </div>
              <div className="project-details">
                <div className="project-header">
                  <h3 className="project-title">MIPS Assembly Multiplication Game</h3>
                  <span className="project-date">Jan 2025 - May 2025</span>
                </div>
                <p className="project-description">
                  Developed a turn-based educational multiplication game in MIPS assembly using MARS simulator. Features include a 6×6 ASCII-art board, dynamic number line with dual pointers, and AI opponent. Implemented modular routines for board rendering, input validation, AI move selection, and win/draw detection with custom audio cues.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">MIPS Assembly</span>
                  <span className="tech-tag">MARS Simulator</span>
                  <span className="tech-tag">Low-level Programming</span>
                  <span className="tech-tag">Algorithm Design</span>
                  <span className="tech-tag">Game Logic</span>
                </div>
                <button className="demo-button">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section certifications-section">
        <div className="section-content">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="certification-symbol" onClick={() => window.open('#', '_blank')}>
                <img src="./images/eJPT-1.webp" alt="Junior Penetration Tester" className="cert-logo" />
              </div>
              <h3>Junior Penetration Tester</h3>
              <p>INE Security</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-item">
              <div className="certification-symbol google-cert" onClick={() => window.open('#', '_blank')}>
                <img src="./images/Google_G_logo.svg.png" alt="Google Cybersecurity" className="cert-logo" />
              </div>
              <h3>Google Cybersecurity</h3>
              <p>Google</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-item">
              <div className="certification-symbol" onClick={() => window.open('#', '_blank')}>
                <img src="./images/Amazon_Web_Services_Logo.svg.png" alt="AWS Cloud Technology Consultant" className="cert-logo" />
              </div>
              <h3>AWS Cloud Technology Consultant</h3>
              <p>Amazon Web Services</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-item">
              <div className="certification-symbol" onClick={() => window.open('#', '_blank')}>
                <img src="./images/mastermindassurance_logo.jpeg" alt="ISO/IEC 27001:2022 Lead Auditor" className="cert-logo" />
              </div>
              <h3>ISO/IEC 27001:2022 Lead Auditor</h3>
              <p>MasterMind</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-item">
              <div className="certification-symbol" onClick={() => window.open('#', '_blank')}>
                <img src="./images/1*PCBXs9F7qjom3aUtzeJxOA.png" alt="Cloud Associate" className="cert-logo" />
              </div>
              <h3>Cloud Associate</h3>
              <p>INE</p>
              <p className="date">2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
