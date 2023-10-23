import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Busca tu cancha",
      text: "Visita la sección de canchas disponibles y analiza cuál se acomoda más a tus necesidades.",
    },
    {
      image: ChooseMeals,
      title: "Selecciónala",
      text: "Una vez hayas escogido tu cancha preferida, dale clic al botón para contactar con el dueño.",
    },
    {
      image: DeliveryMeals,
      title: "Reserva tu cancha",
      text: "Una vez contactes con el dueño, podrás definir el día y el horario en privado.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cómo encontrar tu mejor cancha?</p>
        <h1 className="primary-heading">Sigue los siguientes pasos</h1>
        <p className="primary-text">
          Es tan sencillo como entrar a la sección de canchas disponibles, seleccionar la cancha que 
          conecte mejor contigo y seleccionar el botón de contacto con el dueño para poder reservar 
          la cancha en privado.
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
