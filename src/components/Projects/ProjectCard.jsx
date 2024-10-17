import React from 'react';
import './Card.css';
import Project from './ProjectApi';


const ProjectCard = () => {

  return (
    <>
      <div className="project_container">
        {Project.map((curItem) => {
          return (
            <div className="project" key={curItem.name}>
               <div className='image'>
                <img src={curItem.image} alt="" />
               
               
                 
               <a href={curItem.url}>
               <div className='link'>
               <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ '--fa-rotate-angle': '-50deg' }}>
                </i></div>
                </a>
                </div>
        
             
              <div className='line'> 
                <span>{curItem.name}</span>
              </div>
              <h3>{curItem.name}</h3>
              <p>{curItem.description}</p>
              <div className="project-icons">
  <a rel="noreferrer"  target='_blank' href={curItem.git} aria-label="Github repository">
    <i className="fa-brands fa-github"></i> Github
  </a>
  <a  rel="noreferrer" target='_blank' href={curItem.url} aria-label="View project">
    <i className="fa-brands fa-dribbble"></i> View
  </a>
</div>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
