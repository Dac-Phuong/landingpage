import React, { useState, useRef } from "react";
import Sliders from "../../Components/Slider";
import Smartdevice from "./../Smartdevice/index.jsx";
import Securitydevices from "../Securitydevices";
import Officeequipment from "../Officeequipment";
import Contact from "../Contact";
import About from "../About";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <Sliders />
      <Smartdevice />
      <Securitydevices />
      <Officeequipment />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
