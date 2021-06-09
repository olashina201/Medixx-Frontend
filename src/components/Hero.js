import React from "react";
import "../assets/styles/header.css";
import image from "../assets/images/doctor-with-stethoscope.png";
import "../assets/styles/hero.css";

function Hero() {
  return (
    <div className="main-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                        <h6>Certificated Doctor</h6>
                        <h2>Search & Find Clinic For Your Health</h2>
                        <div class="wrapper">
                          <div class="card">
                            <div class="content">
                              <div class="img">
                                <img src="https://source.unsplash.com/500x500/?face" alt="" />
                              </div>
                              <div class="details">
                                <span class="name">XYZ Human</span>
                                <p>FrontEnd Developer</p>
                              </div>
                            </div>
                            <a href="#">Follow</a>
                          </div>
                        </div>
                        <div className="main-blue-button"><a href="#contact">Get Started</a></div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-image">
                          <img src={ image }alt="team meeting" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Hero;
