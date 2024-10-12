
import React from 'react';
import ProjectCard from './ProjectCard';
import './Card.css';




const ProjectSec = () => {
  return (
    <div className='project-section'>
         
         <div className="project-heading">
   <span>EXPLORE MY CREATIONS</span>
   <h1>WHAT I BUILD</h1>
</div>

      <ProjectCard />
    </div>
  );
};

export default ProjectSec;
