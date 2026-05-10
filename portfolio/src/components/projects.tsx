// ProjectsSection.tsx
import React, { useState, useEffect } from 'react';
import '../componentStyles/ProjectsSection.css';
import engfindScreenshot from '../assets/Projects/engfind.png';
import chatbotScreenshot from '../assets/Projects/chatbot.png';
import careerlaunchScreenshot from '../assets/Projects/cla.png';
import '../PageStyles/home.css'; 


interface Project {
  id: number;
  title: string;
  description: string;
  screenshotUrl: string;
  liveUrl?: string;          // Only for published projects
  status: 'published' | 'upcoming';
  releaseDate?: Date;        // Only for upcoming projects
}

const ProjectsSection: React.FC = () => {
  const [now, setNow] = useState(new Date());

  // Ensure the timer updates correctly
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date()); // Update the `now` state every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Format remaining time until release
  const getTimeLeft = (releaseDate: Date): string => {
    const diff = releaseDate.getTime() - now.getTime();
    if (diff <= 0) return 'Launched!'; // Handle past dates

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    // const minutes = Math.floor((diff / (1000 * 60)) % 60);
    // const seconds = Math.floor((diff / 1000) % 60);

    // return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    return `${days} days`;
  };

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'EngFind Platform',
      description: 'Automotive platform for engineers and car enthusiasts.',
      screenshotUrl: engfindScreenshot, // Updated to use imported asset
      liveUrl: 'https://engfind.onrender.com',
      status: 'published',
    },
    {
      id: 2,
      title: 'Craggy Chatbot',
      description: 'ML-powered chatbot. Your intelligent assistant for quick answers.',
      screenshotUrl: chatbotScreenshot, // Updated to use imported asset
      liveUrl: 'https://craggy-chatbot.vercel.app/',
      status: 'published',
    },
    {
      id: 3,
      title: 'CareerLaunch Africa',
      description: 'AI-powered career guidance platform.',
      screenshotUrl: careerlaunchScreenshot, // Updated to use imported asset
      status: 'upcoming',
      releaseDate: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000), // 100 days
    },
    // {
    //   id: 4,
    //   title: 'Blockchain Certificate Vault',
    //   description: 'Decentralised credential verification.',
    //   screenshotUrl: 'https://picsum.photos/id/91/400/250',
    //   status: 'upcoming',
    //   releaseDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 21 days
    // },
  ];

  const handleScreenshotClick = (project: Project) => {
    if (project.status === 'published' && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="projects-wrapper">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Clickable screenshot */}
            <div
              className={`screenshot-wrapper ${project.status === 'published' ? 'clickable' : ''}`}
              onClick={() => handleScreenshotClick(project)}
              role={project.status === 'published' ? 'button' : undefined}
              tabIndex={project.status === 'published' ? 0 : undefined}
            >
              <img
                src={project.screenshotUrl}
                alt={project.title}
                className="screenshot"
              />
              {project.status === 'published' && (
                <div className="live-overlay">🔗 Live Website</div>
              )}
            </div>

            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.status === 'upcoming' && project.releaseDate && (
                <div className="countdown-box">
                  <span className="countdown-label">Launch in</span>
                  <span className="countdown-timer">{getTimeLeft(project.releaseDate)}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;