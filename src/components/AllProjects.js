import React, { useEffect } from "react";
import classes from "./AllProjects.module.css";
import EcommerePic from "../assets/EcommerePic.png";
import CoinsStats from "../assets/CoinsStats.png";
import Portfolio from "../assets/Portfolio.png";
import ProjectCard from "./ProjectCard";
import DisabledTag from "../assets/DisabledTag.PNG"
import WeatherApp from "../assets/WeatherApp.PNG"
import Aos from "aos";
import "aos/dist/aos.css";
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
  {
    image: DisabledTag,
    title: "Disabled Parking Cheack Website",
    text: `Checks whether the car has a disabled parking tag, connected to the government database.`,
    technologies: "Html, Css, JavaScript, React, api",
    view: "https://parkingtag.netlify.app/",
    source: "https://github.com/liroynezro3/disabledparkingtag",
  },
  {
    image: "",
    title: "Netflix clone website, comming soon... ;-)",
    text: `Netflix clone website, comming soon... ;-)`,
    technologies: "Html, Css, JavaScript, React, Meterial Ui, RESTful API, MongoDB, Node JS/Express, Axios ",
    view: "/",
    source: "/",
  },
  {
    image: WeatherApp,
    title: "Basic global weather app",
    text: `Check the weather forecast anywhere in the world, connected to an external database.`,
    technologies: "Html, Css, JavaScript, React, api",
    view: "https://liroyweatherapp.netlify.app/",
    source: "https://github.com/liroynezro3/WeatherApp",
  },

];
const AllProjects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <h1 className={classes.projectHeading}>My Projects</h1>
      <div
        className={classes.projectContainer}
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
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
