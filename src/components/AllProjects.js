import React from "react";
import classes from "./AllProjects.module.css";
import EcommerePic from "../assets/EcommerePic.png";
import CoinsStats from "../assets/CoinsStats.png";
import Portfolio from "../assets/Portfolio.png";
import ProjectCard from "./ProjectCard";
const ProjectsData = [
  {
    image: EcommerePic,
    title: "Ecommere Shop Website",
    text: ` A store that allows you to search for your products, place orders, see your orders, allow users registered as administrators to delete orders, add products and delete products.`,
    technologies:
      "Html, Css, JavaScript, React, Node JS/Express, Material UI, RESTful API, MongoDB, Authentication, Firebase",
    view: "https://liroyecommerce.netlify.app/products",
    source: "https://github.com/liroynezro3/LiroyEcommereFrontEnd",
  },
  {
    image: Portfolio,
    title: "My Portfolio Website",
    text: `My portfolio website, shows my capabilities, presents my projects and their source code in GitHub, and of course you can contact me.
    *All my projects were for learning only and to show my abilities*`,
    technologies: "Html, Css, JavaScript, React, Material UI",
    view: "/home",
    source: "/home",
  },
  {
    image: CoinsStats,
    title: "Coinstats Website",
    text: `My Coins website. Shows the updated currency rates, allows you to search for coins, track them, and display them at the top of the list.`,
    technologies: "Html, Css, JavaScript, React, Material UI, Api",
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
            technologies={item.technologies}
            view={item.view}
            source={item.source}
          ></ProjectCard>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AllProjects;
