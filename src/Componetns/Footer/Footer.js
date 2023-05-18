import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          
          <p className="font-bold">
            MD MUSABBIR <br />
            Front-end developer who loves what he does.
          </p>
          
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 h-12 mt-3">
           <a href="https://www.linkedin.com/in/mdmusabbir/" target="_blank" rel="noreferrer"> <BsLinkedin className="w-full h-6 hover:text-blue-300 transition delay-150 "/></a>
           
         <a href="https://github.com/musabbir-m" target="_blank" rel="noreferrer">   <BsGithub className="w-full h-6 hover:text-blue-300 transition delay-150 "/></a>
          
          </div>
        </div>
        <p >Copyright © 2023 - Md Musabbir</p>
      </footer>
    </div>
  );
};

export default Footer;
