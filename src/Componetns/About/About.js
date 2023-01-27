import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-20 ">
      {/* <img className="rounded-full h-64 " src="me.png" alt="" /> */}
      
        <div>
          <img className="pro-pic rounded-full w-2/3 " alt="" src="me2.png" />
        </div>
     
      <div className="avatar"></div>
      <h2 className="text-4xl py-5 mt-10 font-bold mb-10">Hi I'm Musabbir,</h2>
      <p className="text-xl font-semibold">
        a front-dend developer. Lorem ipsum dolor sit amet 
        consectetur <br></br>
        adipisicing elit. Consectetur, corporis?
      </p>
    </div>
  );
};

export default About;
