import React, { useState } from 'react'
import"./Navbarstyle.css"
// import { Link } from 'react-router-dom'
import { FaBars ,FaTimes} from "react-icons/fa"
const Navbar = () => {

 const[click, setClick] = useState(false)

const handleClick = () => setClick(!click);

const [color ,setColor] = useState(false)
const changecolor = () =>{
    if(window.scrollY >= 1){
        setColor(true)
    }
    else{
        setColor(false)
    }
}

window.addEventListener("scroll" ,changecolor)
  return (
    <>
    <div className={color ? "header header-bg": "header"}>
       
            <img src="/logo.png" alt="" className='logo' />
        <ul className={click ?("nav-menu active"):("nav-menu")}>
            <li>
            <a href="#Home">Home</a>
            </li>
            <li>
            <a href="#Skill">Skills</a>
            </li>
            <li>
            <a href="#Projects">Projects</a>
            </li>
            <li>
            <a href="#Home">Contact</a>
            </li>
           
        </ul>
        <div className="hamburger" onClick={handleClick}>
            { click ?(<FaTimes size={20} style={{color:"black"}}/>):
            (<FaBars size={20} style={{color:"black"}}/>)}
            
            
        </div>
    </div>
    </>
  )
}

export default Navbar
