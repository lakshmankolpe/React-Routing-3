import React from "react";
import "./Contact.css";
import ContactImg from "./Telecommuting-pana.png"
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-paragraph">
        Service options: <br />
        Has all you can eat Has outdoor seating Serves vegan dishes
        <br />
        Address:
        <br /> Survey number 84, 3B, Solapur - Pune Hwy, near siddhivinayak
        petrol pump, Gund wasti, Manjri Bk, Pune, Maharashtra 412307 Hours:{" "}
        <br />
        Open ⋅ Closes 11 pm
        <br />
        Phone: 096655 54045
        <br />
        Order: swiggy.com
      </p>
      <img src={ContactImg} className="contact-image"/>
    </div>
    </>);
}

export default Contact;
