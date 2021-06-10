import React from "react";
import image from "../assets/images/doctor.png";
import "../assets/styles/steps.css";

function Steps() {
  return (
    <div className="solution-wrapper">
      <div className="head">
        <p>FASTER SOLUTION</p>
        <h1>6 Easy Steps And Get Your Solution</h1>
      </div>
      <div className="solution-cards">
        <div className="solution-card">
          <img src={image} />
          <h6>Check doctors profile</h6>
          <p>check doctors profile accross the worldhbdhfve fveheafdhagufyga</p>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>Request consultation</h6>
          <p>check doctors profile accross the worldhbdhfve fveheafdhagufyga</p>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>Receive your consultation</h6>
          <p>check doctors profile accross the worldhbdhfve fveheafdhagufyga</p>
        </div>
        <div className="solution-card">
          <img src={image} />
          <h6>Get your solution</h6>
          <p>check doctors profile accross the worldhbdhfve fveheafdhagufyga</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
