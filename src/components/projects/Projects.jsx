import React from "react";
import "./projects.css";
import ProjectCard from "../projects/ProjectCard";

const Projects = () => {
  return (
    <div className="parent__projects container" id="projects">
      <div>
        <h1 className="projects__title">Projects</h1>
        <h3 className="projects__subtitle">Some of my recent work</h3>
      </div>
      <div>
        <ProjectCard
          imageUrl={"../screencapture-kana2diving.png"}
          description1={
            "As a passionate scuba diver and a member of a PADI diving school, I had the opportunity to contribute to our community by developing a website for KanaDiving."
          }
          description2={
            "Leveraging React and Bootstrap, the platform not only provides valuable information about our diving school but also fosters a sense of community among fellow divers. I am proud to have been part of this project, which contributes to the promotion of safe and enjoyable diving experiences."
          }
          liveWebsiteLink="https://kana2diving.vercel.app"
          githubLink="https://github.com/jeroendev/kanadiving2"
        />
      </div>
      <ProjectCard
        imageUrl={"../screencapture-coffeeshop.png"}
        description1={
          "My first front-end project made with React and Tailwind CSS, fully responsive design for mobile devices."
        }
        description2={""}
        liveWebsiteLink="https://tailwind-coffeeshop.vercel.app"
        githubLink="https://github.com/jeroendev/Tailwind-coffee"
        reverse={true}
      />
    </div>
  );
};

export default Projects;
