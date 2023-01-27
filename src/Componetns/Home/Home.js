import React from "react";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Home;
