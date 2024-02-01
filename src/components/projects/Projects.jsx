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
            "As a passionate scuba diver and a member of a PADI diving school, I had the opportunity to contribute to our community by developing a website for KanaDiving. Currently, we are still working together on the final details."
          }
          description2={
            "Leveraging React and Bootstrap, the platform not only provides valuable information about our diving school but also fosters a sense of community among fellow divers. I am proud to have been part of this project, which contributes to the promotion of safe and enjoyable diving experiences."
          }
          liveWebsiteLink="https://kana2diving.vercel.app"
          githubLink="https://github.com/jeroendev/kanadiving2"
        />
      </div>
      <div>
        <ProjectCard
          imageUrl={"../screencapture-limoncello.png"}
          description1={
            "My recent project is an engaging platform dedicated to the sales of delightful limoncello. This website provides an intuitive and visually appealing user experience. One unique aspect of this project is the integration of AI in the creation of compelling visuals. The images on the website, showcasing the enticing limoncello products, were generated with the assistance of artificial intelligence."
          }
          description2={
            "The website is designed with a focus on responsiveness and modern design, ensuring seamless navigation across various devices. It has provided me with an opportunity to enhance both my design and programming skills, and I look forward to the continued refinement and expansion of the project."
          }
          liveWebsiteLink="https://zesty-spirits.vercel.app"
          githubLink="https://github.com/jeroendev/limoncello-website"
          reverse={true}
        />
      </div>
      <div>
        <ProjectCard
          imageUrl={"../coming-soon.avif"}
          description1={
            "Currently working on a small project called 'Recreational Dive Logger', here you can log all your dives and usefull data like average air consumption will be calculated."
          }
          description2={
            "I am using React and SASS for this project. I am going to add all the diving spots of Belgium and users can see a map of where they have been before. For the moment it is made with localStorage, an SQL database will be implemented in another version."
          }
          liveWebsiteLink="https://dive-logger.vercel.app"
          githubLink="https://github.com/jeroendev/dive-logger"
          reverse={false}
        />
      </div>
    </div>
  );
};

export default Projects;
