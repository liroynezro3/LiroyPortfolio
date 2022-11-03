import React from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import HeroImg2 from '../components/HeroImg2'
import AllProjects from '../components/AllProjects'

const Projects = () => {
  return (
    <>
    <Header/>
    <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
    <AllProjects/>
    <Footer/>
    </>
  )
}

export default Projects