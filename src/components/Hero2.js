import React from "react";
import image from "../assets/images/doctor-and-nurse.png";
import "../assets/styles/steps.css";

function Hero2() {
  return (
      <div className="question-section">
        <div className="left">
          <h6>POST A QUESTION</h6>
          <h4>What concerns you about your health today?</h4>
          <p>Check your symptoms and find out what could be causing them.
            It's fast, free and anonymous.</p>
        </div>
        <div className="right">
          <img src={image} />
        </div>
      </div>
  );
}

export default Hero2;
