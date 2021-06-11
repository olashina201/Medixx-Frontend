import React from "react";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <section className="appoint">
      <div className="left-appoint">
        <h1 className="started">Ready to get started?</h1>
        <h5>We make it simple to get healthcare whenever and wherever you want</h5>
      </div>
      <div className="right-appoint">
        <Link className="main-white-button" to="/appointment">Create Appointment Now!</Link>
      </div>
    </section>
  );
}

export default Appointment;
