import React from 'react'
import "./SkillStyle.css"
const Skill = () => {
  return (
    <>
    <div className="skill_container" id='Skill'>
        <div className="skill_heading">
            <div className="text">
              <span>Let's see my skills</span>
            <h1>What I Have</h1>
            </div>
        </div>
        <div className="image_container">
     
          <div className="image-row">
            <img src="./images/1.jpg" alt="" />
            <img src="./images/2.jpg" alt="" />
            <img src="./images/7.jpg" alt="" />
            <img src="./images/8.jpg" alt="" />
          </div>
          <div className="images-row_2"> 
          {/* <img src="./images/3.jpg" alt="" /> */}
            {/* <img src="./images/6.jpg" alt="" /> */}
            <img src="./images/5.jpg" alt="" />
            {/* <img src="./images/4.jpg" alt="" /> */}
            </div>
      
       
        </div>
    </div>
    </>
  )
}

export default Skill
