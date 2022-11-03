import React from "react";
import classes from "./ContactForm.module.css";
const ContactForm = () => {
  const sumbitHandler = (e) => {
    e.preventDefault();
    alert("hi");
  };
  return (
    <div className={classes.contact}>
      <form onSubmit={sumbitHandler}>
        <p>Your Name</p>
        <input type={"text"} placeholder={"Text"}></input>
        <p>Email</p>
        <input type={"email"} placeholder={"Email"}></input>
        <p>Subject</p>
        <input type={"text"} placeholder={"Message"}></input>
        <p>Message</p>
        <textarea rows="6" placeholder="Type your message"></textarea>
        <button className="btn" type="submit">
          click
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
