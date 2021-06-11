import React from "react";
import "../assets/styles/doctor.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

function Doctor() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 align-middle">
          <h2 style={{ textAlign: "center" }}>Meet Our Doctors</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" />
            </div>
            <div className="team-content">
              <h3 className="name">Olashina Quadri</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li><a href="#" aria-hidden="true"><img src={facebook} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={twitter} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={instagram} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={pinterest} /></a></li>
            </ul>
          </div>
        </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=839" />
            </div>
            <div className="team-content">
              <h3 className="name">Alausa Bashir</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li><a href="#" aria-hidden="true"><img src={facebook} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={twitter} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={instagram} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={pinterest} /></a></li>
            </ul>
          </div>
        </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=856" />
            </div>
            <div className="team-content">
              <h3 className="name">Odubena Abraham</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li><a href="#" aria-hidden="true"><img src={facebook} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={twitter} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={instagram} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={pinterest} /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=836" />
            </div>
            <div className="team-content">
              <h3 className="name">Akinlade Jamiu</h3>
              <h4 className="title">Mobile Developer</h4>
            </div>
            <ul className="social">
              <li><a href="#" aria-hidden="true"><img src={facebook} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={twitter} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={instagram} /></a></li>
              <li><a href="#" aria-hidden="true"><img src={pinterest} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
