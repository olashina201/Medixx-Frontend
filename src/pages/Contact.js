import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  const authData = useSelector((state) => state.auth.authData);
  return (
    <div>
      <h1>Contact { authData }</h1>
    </div>
  );
}

export default Contact;
