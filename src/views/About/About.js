import React from "react";
import "./About.css";
import Shop from "./Coffee shop-pana.png";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <h3 className="about-heading">About</h3>
        <p className="about-paragraph ">
          The word hotel is derived from the French hôtel (coming from the same
          origin as hospital), which referred to a French version of a building
          seeing frequent visitors, and providing care, rather than a place
          offering accommodation.
        </p>
        <img src={Shop} alt="img" className="shop-image" />
      </div>
    </>
  );
}

export default About;
