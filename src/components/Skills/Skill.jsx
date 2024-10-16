import React from 'react'
import "./skill.css"
const Skill = () => {
  return (
    <div className='mainskill' id='Skill'>

     <div className="main-container">
      <div className="skill-heading">
        <span>LET'S SEE MY SKILL</span>
        <h1>WHAT I LEARN</h1>
      </div>
      <div className="skill-container">
        <div className="skill html">HTML5</div>
        <div className="skill css">CSS3</div>
        <div className="skill tail">Tailwind</div>
        <div className="skill boot">Bootstrap</div>
        <div className="skill js">Javascript</div>
        <div className="skill react">React.js</div>
        <div className="skill redux">Redux.js</div>
        <div className="skill">Next.js</div>
        <div className="skill">Shadcn</div>
        <div className="skill mongo">MongoDB</div>
        <div className="skill node">Node.js</div>
        <div className="skill">Express.js</div>
        <div className="skill">Mongoose ORM</div>
      </div>
     </div>
    </div>
  )
}

export default Skill
