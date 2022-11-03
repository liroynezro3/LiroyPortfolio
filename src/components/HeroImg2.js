import React from "react";
import classes from "./HeroImg2.module.css";
const HeroImg2 = (props) => {
  return (
    <div className={classes.heroImg}>
      <div className={classes.heading}>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
