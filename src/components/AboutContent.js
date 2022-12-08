import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutContent.module.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/React2.png";
import Aos from "aos";
const AboutContent = () => {
  Aos.init();
  return (
    <div className={classes.about}>
      <div className={classes.left} data-aos="fade-right"
     data-aos-duration="800"
     data-aos-easing="ease-in-sine"
     data-aos-delay="100">
        <h1>Who Am i?</h1>
        <p>
          Im a react fullstack development(MERN Stack). Build responsive server-side
          and client-side websites. I have a lot of motivation to get along and
          develop. And I am looking for a job that I can enrich and also
          contribute from my knowledge. and develop new things.
        </p>
        <Link to={"/contact"}>
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className={classes.right} data-aos="fade-left"
     data-aos-duration="800"
     data-aos-easing="ease-in-sine">
        <div className={classes.imgs}>
        <div className={classes.imgStackTop}>
          <img src={React1} className={classes.img1} alt={"reactPic"}></img>
        </div>
        <div className={classes.imgStackBottom}>
          <img src={React2} className={classes.img2} alt={"react2Pic"}></img>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
