import React from "react";
import Web from "../src/images/app dev.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name=" Welcome to About page"
        imgsrc={Web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
