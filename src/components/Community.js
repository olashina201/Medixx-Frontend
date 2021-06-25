import React from "react";
import image from "../assets/images/doctor-and-nurse.png";
import "../assets/styles/steps.css";

function Community() {
  return (
      <div className="question-section">
        <div className="left">
          <h6>POST A QUESTION</h6>
          <h4>Post Your Questions Our Experts are ready to answer</h4>
          <p>Medicx connects health providers and healthcare
          </p>
        </div>
        <div className="right">
          <img src={image} />
        </div>
      </div>
  );
}

export default Community;
