import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from "../components/HeroImg"
import Skill from '../components/Skill'
import ProjectSec from '../components/ProjectSec'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Skill/>
   <ProjectSec/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default Home
