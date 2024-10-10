import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Footer from '../components/footer/Footer'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import Skill from '../components/Skills/Skill'
import ProjectSec from '../components/Projects/ProjectSec'


const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
     <Skill/>
     <ProjectSec/>
      <Contact />
      <Footer />



    </>
  )
}

export default Home
