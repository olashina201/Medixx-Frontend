import React from "react";
import image from "../assets/images/doctor.png";
import "../assets/styles/steps.css";

function Steps() {
  return (
    <div className="solution-wrapper">
      <div className="head">
        <h1>What we offer</h1>
      </div>
      <div className="solution-cards">
        <div className="solution-card">
          <img src={image} />
          <h6>Dynamic Onboarding for both User/Patient and Doctors
            with distinguishable dashboards.</h6>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>End-to-End encrypted P2P chat with notification and prescribing features</h6>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>Disease prediction with symptoms.</h6>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>Dynamic verification of legal documents via Authorization body.</h6>
        </div>
      </div>
    </div>
  );
}

export default Steps;
