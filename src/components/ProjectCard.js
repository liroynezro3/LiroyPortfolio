import React from "react";
import classes from "./ProjectCard.module.css";
const ProjectCard = (props) => {
  return (
    <div className={classes.projectCard}>
      <a href={props.view} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.title}></img>
      </a>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <h4>Technologies</h4>
        <span>{props.technologies}</span>
      <div className={classes.buttons}>
        <a href={props.view} className="btn" target="_blank" rel="noreferrer">
          View
        </a>
        <a href={props.source} className="btn" target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
