import React from "react";
import classes from "./Footer.module.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <div className={classes.location}>
          <HomeWorkIcon style={{ fontSize: "30px", marginRight: "1rem" }} />
          Rishon Letzion, heil himush
        </div>
        <div className={classes.phonenumber}>
          <PhoneInTalkIcon style={{ fontSize: "30px", marginRight: "1rem" }} />
          050-2457449
        </div>
        <div className={classes.email}>
          <EmailIcon style={{ fontSize: "30px", marginRight: "1rem" }} />
          liroynezro2@gmail.com
        </div>
      </div>
      <div className={classes.right}>
        <h3>About the company</h3>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum.
        </p>
        <div className={classes.connection}>
          <a href={"https://www.facebook.com/liroy.nezri"} target="_blanked">
          <FacebookIcon style={{ fontSize: "40px", marginRight: "1rem", color:"#1E90FF"}} />
          </a>
          <a href={"https://www.instagram.com/liroynezri/"} target="_blanked">
            <InstagramIcon style={{ fontSize: "40px", marginRight: "1rem",color:"#A0522D"}} />
          </a>
          <a href={`https://api.whatsapp.com/send?phone=972502457449&text=Hi%20Liroy,%20I%20saw%20your%20site%20and%20wanted%20to%20give%20you%20a%20comment`} target="_blanked">
            <WhatsAppIcon style={{ fontSize: "40px", marginRight: "1rem", color:"#00FF00" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
