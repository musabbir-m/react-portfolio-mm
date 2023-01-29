import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
