import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"
import Project from './ProjectApi';
const ProjectCard = () => {

  return (
    <>

    <div className="main">
      <div className="project_container">

        {Project.map((curItem)=>{
          return(
            <div className="card_container" key={curItem.id}>
            <div className="card">
              <img src={curItem.image} alt="" className='cardimage' />
            </div>
            <div className="cardtitle"><h4>{curItem.name}</h4>
             <Link to={curItem.url}><button className="btn">View On Github</button></Link>
            </div>
            
          </div>
          )
        })}
       
       
      </div>
      </div>
    </>
  )
}

export default ProjectCard
