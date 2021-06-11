import React from "react";
import image from "../assets/images/doctor.png";
import "../assets/styles/header.css";

function Header() {
  return (
    <section className="hero">
      <div className="hero-container">
          <div className="hero-container__content">
              <h1>Bring everyone together to build better products.</h1>
              <p>Manage makes it simple for software teams to plan
                day-to-day tasks while keeping the larger team goals in view.</p>
              <a href="#" className="cta-button">Get Started</a>
          </div>
          <div className="hero-container__illustration">
              <img src={image} alt="" />
          </div>
      </div>
    </section>
  );
}

export default Header;
