import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <Header />
      <HeroImg2 heading="Contact" text="Contact me if you like my works"/>
      <ContactForm/>
      <Footer />
    </>
  );
};

export default Contact;
