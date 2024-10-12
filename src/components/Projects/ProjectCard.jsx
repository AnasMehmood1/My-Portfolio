import React from 'react';
import './Card.css';
import Project from './ProjectApi';
import { Link } from 'react-router-dom';

const ProjectCard = () => {

  return (
    <>
      <div className="project_container">
        {Project.map((curItem) => {
          return (
            <div className="project" key={curItem.name}>
               <div className='image'><img src={curItem.image} alt="" />
               
               <Link to="/google.com"> 
                
                 
                <div className='link'>
                <i className="fa-solid fa-arrow-right fa-rotate-by" style={{ '--fa-rotate-angle': '-50deg' }}></i></div>
            
           </Link></div>
             
              <div className='line'> 
                <span>{curItem.name}</span>
              </div>
              <h3>{curItem.name}</h3>
              <p>{curItem.description}</p>
              
             
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
