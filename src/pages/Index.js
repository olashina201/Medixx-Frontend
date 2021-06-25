import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Appointment from "../components/Appointment";
import Doctor from "../components/Doctor";
import Community from "../components/Community";

function Index() {
  return (
    <>
      <NavBar />
      <Hero />
      <Steps />
      <Hero2 />
      <Hero3 />
      <Community />
      <Doctor />
      <Appointment />
      <Footer />
    </>
  );
}

export default Index;
