import React from "react";
import classes from "./AllProjects.module.css";
import EcommerePic from "../assets/EcommerePic.png";
import CoinsStats from "../assets/CoinsStats.png"
import Portfolio from "../assets/Portfolio.png"
import ProjectCard from "./ProjectCard";
const ProjectsData = [
  {
    image: EcommerePic,
    title: "Ecommere Shop Website",
    text: `@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@ `,
    view: "https://liroyecommerce.netlify.app/products",
    source: "https://github.com/liroynezro3/LiroyEcommereFrontEnd",
  },
  {
    image: Portfolio,
    title: "My Portfolio Website",
    text: `@@!!!!!!!!!!!!@ @@@@@!!!!!!!!!!@@@@@ @@@@@@!!!!!@@@@@@
@!!!!!!!!!!!!@@@@@ @@@!!!!!!!!!@@@@@ @@@@!!!!
@@@!!!@@@@@ @@@@!!!!!!!!!!@@@@@`,
    view: "/home",
    source: "/home",
  },
  {
    image: CoinsStats,
    title: "Coinstats Website",
    text: `&&&&&&&&&& @@@@@@@@@@@@@@@@@@@ @@@@@@@&%%%%%%%%@@@
@@@@@&$$$$$$$$$$$$`,
    view: "https://coinstats.netlify.app",
    source: "https://github.com/liroynezro3/coinsStats",
  },
];
const AllProjects = () => {
  return (
    <React.Fragment>
      <h1 className={classes.projectHeading}>My Projects</h1>
      <div className={classes.projectContainer}>
        {ProjectsData.map((item, i) => (
          <ProjectCard
            key={i}
            image={item.image}
            title={item.title}
            text={item.text}
            view={item.view}
            source={item.source}
          ></ProjectCard>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AllProjects;
