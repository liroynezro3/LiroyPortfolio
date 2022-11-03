import React from 'react'
import Header from "../components/Layout/Header"
import HeroImg from '../components/HeroImg'
import Footer from '../components/Layout/Footer'
import AllProjects from "../components/AllProjects"
const Home = () => {
  return (
    <React.Fragment>
    <Header/>
    <HeroImg/>
    <AllProjects/>
    <Footer/>
    </React.Fragment>
  )
}

export default Home