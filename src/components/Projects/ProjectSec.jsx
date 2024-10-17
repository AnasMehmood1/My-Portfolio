
import React from 'react';
import ProjectCard from './ProjectCard';
import './Card.css';




const ProjectSec = () => {
  return (
    <div className='project-section' id='project'>
         
         <div className="project-heading">
   <span>Discover My Craft</span>
   <h1>What I've Designed & Developed</h1>
</div>

      <ProjectCard />
    </div>
  );
};

export default ProjectSec;
