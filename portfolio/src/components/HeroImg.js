import React from 'react'
import "./HeroStyle.css"
import ANASRESUME from "./down/ANAS RESUME.pdf"
const HeroImg = () => {
  return (
    <div>
      <div className="hero" id='Home'>
        <div className="mask">
        </div>
        <div className="contant">
            <p>HEY ! I AM</p>
            <h1>Anas <br /> Mehmood</h1>
            <div className="developer">
              <h2>I'm <span className='developerFrontend'>Frontend Developer</span></h2>
            </div>
             <a className='cv' href={ANASRESUME} download> <button>VIEW RESUME</button></a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
