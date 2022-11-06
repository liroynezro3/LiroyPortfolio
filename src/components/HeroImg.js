import React from "react";
import classes from "./HeroImg.module.css";
import Intro from "../assets/intro.jpg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const HeroImg = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.mask}>
        <img src={Intro} className={classes.intoImg} alt={"picturae"}/>
      </div>
      <div className={classes.content}>
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello everyone,')
      .pauseFor(1800)
      .deleteAll()
      .typeString('My Name Is Liroy And Im Developer')
      .pauseFor(300)
      .deleteChars(9)
      .typeString('<strong>Fullstack Web Developer (MERN Stack)</strong>')
      .pauseFor(10000)
      .start();
  }}
  options={{
    autoStart: true,
    loop: true,
  }}/>
      <h1>im React Development</h1>
      <div className={classes.buttons}>
        <Link to="/projects" className={`btn ${classes.classesbtn}`} onClick={()=>{alert("hi")}}>
          projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          contact
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
