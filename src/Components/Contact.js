import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tienes sugerencias?</h1>
      <h1 className="primary-heading">Déjanos tu idea</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="sugerencia de jugadoraso..." />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
