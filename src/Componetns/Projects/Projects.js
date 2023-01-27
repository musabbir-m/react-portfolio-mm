import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setPorjects] = useState([]);
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    fetch("ProjectData.json")
    .then (res=> res.json())
    .then(data=> {setPorjects(data)
    setLoading(false)
    })
    ;
  }, []);
  console.log(projects);
  if (loading){
    return (<div className="mx-auto my-auto">
      <button className="btn btn-square loading"></button>
    </div>)
  }

  return (
    <div className="mx-auto  mt-20 text-center">
      <hr className= "w-48 flex justify-center content-center" />
      <h2 className="text-3xl font-bold py-4">Projects</h2>
      
      <p >Here are some recent projects I've worked on</p>
      <div className="px-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        projects?.map(
            project=> <ProjectCard project={project}></ProjectCard>
        )

        }
      </div>
     
    
    </div>
  );
};

export default Projects;
