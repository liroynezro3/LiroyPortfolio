import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <>
      <Header />
      <HeroImg2 heading="About" text="Im Fullstack web development (Mern)"/>
      <AboutContent/>
      <Footer />
    </>
  );
};

export default About;
