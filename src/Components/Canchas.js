import React from "react";
import Cancha from "../Assets/Cancha.jpeg";
import Cancha2 from "../Assets/Cancha2.jpeg";
import Cancha3 from "../Assets/Cancha3.jpg";
import Cancha4 from "../Assets/Cancha4.jpg";
import Cancha5 from "../Assets/Cancha5.jpeg";
import Cancha6 from "../Assets/Cancha6.jpeg";

const Work = () => {
  const workInfoData = [
    {
      image: Cancha,
      title: "Cancha 1",
      text: "Disfruta del juego en nuestra cancha de fútbol con césped sintético de primera calidad.",
    },
    {
      image: Cancha2,
      title: "Cancha 2",
      text: "Partidos intensos en una cancha de fútbol pequeña pero emocionante.",
    },
    {
      image: Cancha3,
      title: "Cancha 3",
      text: "Experimenta la emoción del fútbol en una cancha con césped sintético de última generación.",
    },
    {
        image: Cancha4,
        title: "Cancha 4",
        text: "Juega fútbol en una cancha de rápido ritmo para partidos emocionantes.",
      },
      {
        image: Cancha5,
        title: "Cancha 5",
        text: "Perfecta para los más jóvenes, nuestra cancha de fútbol ofrece diversión segura.",
      },
      {
        image: Cancha6,
        title: "Cancha 6",
        text: "Experimenta el juego en una superficie uniforme y de alta calidad.",
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Canchas disponibles...</h1>
        <p className="primary-text">
          Aquí se encuentran las canchas disponibles en tu localidad.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
