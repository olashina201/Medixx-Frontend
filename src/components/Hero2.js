import React from "react";
import image from "../assets/images/doctor-and-nurse.png";
import "../assets/styles/steps.css";

function Hero2() {
  return (
      <div className="question-section">
        <div className="left">
          <h6>POST A QUESTION</h6>
          <h4>Post Your Questions Our Experts are ready to answer</h4>
          <p>dvsghjsezbjdfvb loebfjb bfJNBFD DFBJBJJFD hbdfadjfc hdbfhjbdacjf
            bfvkjnsnfvjnsdklvjdsblklsdjb hjbdjkakndf kbjcfbhab dhcb  sdvbhjbahf
            hbvhjbjkfzkgsbk hjbzhdsfvhab jbfvhjzbsbvj jhbfjbhjvb hsfbjkhbadjf
            jsjkfh
          </p>
        </div>
        <div className="right">
          <img src={image} />
        </div>
      </div>
  );
}

export default Hero2;
