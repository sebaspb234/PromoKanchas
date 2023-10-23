import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de nosotros</p>
        <h1 className="primary-heading">
          Somos ágiles
        </h1>
        <p className="primary-text">
        Buscamos mejorar la experiencia al momento de encontrar la mejor cancha para tí.
        </p>
      </div>
    </div>
  );
};

export default About;
