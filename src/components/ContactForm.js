import React from "react";
import classes from "./ContactForm.module.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const history = useHistory();
  const form = useRef();
  const sumbitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_9xk4zkd","template_b077a69", form.current, "csWW7YG83lnJSnE3Q")
      .then(() => {
          alert("Thank you for contacting us , The message was sent successfully")
          history.replace("/home")
        },
        (error) => {
          console.log(error.text);
          alert("The message was not sent, please try again later")
        }
      );
  };
  return (
    <div className={classes.contact}>
      <form onSubmit={sumbitHandler} ref={form}>
        <p>Your Name</p>
        <input type={"text"} placeholder={"Text"} name="name"></input>
        <p>Email</p>
        <input type={"email"} placeholder={"Email"} name="user_email"></input>
        <p>Subject</p>
        <input type={"text"} placeholder={"Your Subject"} name="Subject"></input>
        <p>Message</p>
        <textarea rows="6" placeholder={"Type your message"} name="message"></textarea>
        <button className="btn" type="submit">
          click
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
