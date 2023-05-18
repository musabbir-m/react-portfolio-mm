import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-5 mt-20 "
    >
      {/* <img className="rounded-full h-64 " src="me.png" alt="" /> */}

      <div>
        <img className="pro-pic rounded-full w-2/3 " alt="" src="me2.png" />
      </div>

      <div className="avatar"></div>

      <h2 className="text-4xl py-3 mt-10 font-bold">
        {/* <Typewriter
        
          onInit={(typewriter) => {
            typewriter
              .typeString("HI I'M MD MUSABBIR,")
              .pauseFor(2000)
              .deleteAll()
              .typeString("A Front end developer..")
              .deleteAll()
              .start();
          }}
        /> */}
        <Typewriter
          options={{
            strings: [`HI I'M MD MUSABBIR,`, "Welcome to my portfolio!"],
            autoStart: true,
            loop: true,
            
          }}
        />
      </h2>
      <hr className="w-24 h-1 mx-auto my-3  bg-yellow-400 border-0 rounded md:mt-2 md:mb-10 dark:bg-gray-700" />
      <p className="text-xl text-center font-semibold">
        I'm a frontend developer. I build function-rich and <br /> userfriendly
        Webapps. <br></br>

      </p>
    </div>
  );
};

export default About;
