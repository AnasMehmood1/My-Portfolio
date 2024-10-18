import React from 'react';
import "./skill.css";

const Skill = () => {
  const skills = [
    { name: "HTML5", logo: "./images/html5.svg" },
    { name: "CSS3", logo: "./images/css3.svg" },
    { name: "Javascript", logo: "./images/js.svg" },
    { name: "Bootstrap", logo: "./images/bootstrap.svg" },
    { name: "Tailwind", logo: "./images/Tailwind.svg" },
    { name: "ReactJS", logo: "./images/react.svg" },
    { name: "NextJS", logo: "./images/nextjs.svg" },
    { name: "Redux", logo: "./images/redux.svg" },
    { name: "NodeJS", logo: "./images/nodejs.svg" },
    { name: "ExpressJS", logo: "./images/express.svg" },
      { name: "MongoDB", logo: "./images/mongodb.svg" },
 
 
          { name: "Git/GitHub", logo: "./images/git.svg" }
  ];

  return (
    <div className='mainskill' id='Skill'>
      <div className="main-container">
        <div className="skill-heading">
          <span>LET'S SEE MY EXPERTISE</span>
          <h1>WHAT I'VE GAINED</h1>
        </div>
        <div className="card-container">
          {skills.map((skill, index) => (
            <div className="card" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
