import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [clickHamburger,setClickHamburger]=useState(false)
  const HandleHamburger=()=>{
    setClickHamburger(!clickHamburger)
  }
  return (
    <div className={`${classes.header}`}>
      <NavLink to="/home" className={classes.portfolioH1}>
        <h1>Portfolio</h1>
      </NavLink>
      <nav className={clickHamburger?`${classes.navbarOpen} ${classes.navbar} `:`${classes.navbar}`}>
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <NavLink to="/Resume" className={classes.resume}>Resume</NavLink>
<div className={classes.humburger} onClick={HandleHamburger}>
  {!clickHamburger&&<MenuIcon fontSize="large"/>}
  {clickHamburger&&<CloseIcon fontSize="large"/>}
</div>
    </div>
  );
};

export default Header;
