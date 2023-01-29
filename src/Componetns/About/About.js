import React from "react";
import './About.css'

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center px-5 mt-20 ">
      {/* <img className="rounded-full h-64 " src="me.png" alt="" /> */}
      
        <div>
          <img className="pro-pic rounded-full w-2/3 " alt="" src="me2.png" />
        </div>
     
      <div className="avatar"></div>
      <h2 className="text-4xl py-3 mt-10 font-bold">Hi I'm Musabbir,</h2>
      <hr className="w-24 h-1 mx-auto my-3  bg-yellow-400 border-0 rounded md:mt-2 md:mb-10 dark:bg-gray-700" />
      <p className="text-xl font-semibold">
        a front-dend developer. Lorem ipsum dolor sit amet 
        consectetur <br></br>
        adipisicing elit. Consectetur, corporis?
      </p>
    </div>
  );
};

export default About;
