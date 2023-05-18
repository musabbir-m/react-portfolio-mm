import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-80 image-full  shadow-lg ">
      <figure className="px-0">
        <img src={project.img} alt="" className="rounded w-full " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className=" text-black bg-purple-500 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition duration-300"
          >
            View site
          </a>
        </div>
        <div className="flex gap-5">
          <a
            href={project.client}
            target="_blank"
            rel="noreferrer"
            className="w-10  rounded-md text-xs text-white font-semibold bg-blue-600 hover:bg-blue-500 hover:text-black transition duration-300"

          >
            {" "}
            <AiFillGithub className="inline" /> Client
          </a>
          <a
            href={project.server}
            target="_blank"
            rel="noreferrer"
            className="w-10  rounded-md text-xs text-white font-semibold bg-blue-600 hover:bg-blue-500 hover:text-black transition duration-300"
          >
            {" "}
            <AiFillGithub className="inline" /> Server
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
