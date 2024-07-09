"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {

  const [tag, setTag] = useState('All');
  const handleTagChange = (name)=>{
    setTag(name)
  }  

  return (
    <>
      <h2 className="flex text-2xl justify-center mb-3 ">My Projects</h2>
      <div className="text-white flex flex-row gap-2 justify-center items-center py-6">

<ProjectTag
name='All'
onClick={handleTagChange}
isSelected={tag==='All'}
/>
<ProjectTag
name='Web'
onClick={handleTagChange}
isSelected={tag==='Web'}
/>
<ProjectTag
name='Mobile'
onClick={handleTagChange}
isSelected={tag==='Mobile'}
/>
    
      </div>
      <div className="grid md:grid-cols-3 md:gap-8 gap-3">
      
      {projectsData.map((project) => (

project.tag.includes(tag)&&
(      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />)
    ))}

      </div>
      <div></div>
    </>
  );
};

export default ProjectsSection;
