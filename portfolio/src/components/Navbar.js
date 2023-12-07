import React, { useState } from 'react'
import"./Navbarstyle.css"
import { Link } from 'react-scroll'
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
         <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            </li>
            <li>
            <Link to="Skill" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
            </li>
            <li>
            <Link to="Projects" spy={true} smooth={true} offset={-65} duration={500}>projects</Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={-65} duration={500}>contact</Link>
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
