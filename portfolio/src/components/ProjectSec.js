
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Cardstyle.css';
import Project from './ProjectApi';

const unique = [...new Set(Project.map((curItem) => curItem.category)), 'All'];

const ProjectSec = () => {
  const [cardData, setCardData] = useState([]);
  const [menuList, setMenuList] = useState(unique);
  const defaultCategory = unique[0]; // Set the default to the first category


  const filter = (category) => {
    if (category === 'All') {
      setCardData(Project);
      return;
    }
    const update = Project.filter((curItem) => curItem.category === category);
    setCardData(update);
  };

  useEffect(() => {
    filter(defaultCategory); // Apply the default category filter when the component mounts
  }, [defaultCategory]);

  return (
    <>
      
      <div className="project_navbar">
          <div className="head"  id='Projects'>
            <span>Let's see my projects</span>
            <h1>What I Do</h1>
          </div>
          <div className="button-group-item">
          {menuList.map((curItem)=>{
    return   <button className="buttonitem"onClick={()=>{filter(curItem)}}>{curItem}</button>
})}
          </div>
         </div>

  

      <ProjectCard cardData={cardData} />
    </>
  );
};

export default ProjectSec;
