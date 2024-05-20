import React from "react";
import Web from "../src/images/app dev.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
        name=" Grow your business with"
        imgsrc={Web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
