import React from "react";

const ProjectCard = ({
  imageUrl,
  description1,
  description2,
  liveWebsiteLink,
  githubLink,
  reverse,
}) => {
  return (
    <div
      className={`row justify-content-center align-items-center pt-sm-5 pt-3 pb-sm-5 pb-3${
        reverse ? " flex-row-reverse" : ""
      }`}
    >
      <div className="col-md-6">
        <div className="card">
          <div className="card__image">
            <img src={imageUrl} alt="Project Image" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <p>{description1}</p>
        <p>{description2}</p>
        <div className="d-flex justify-content-around mt-4">
          <a href={liveWebsiteLink} target="_blank">
            <button className="btn btn-dark">
              Live Website{" "}
              <i
                className="bx bx-right-top-arrow-circle"
                style={{ marginLeft: "5px", fontSize: "1.2em" }}
              ></i>
            </button>
          </a>
          <a href={githubLink} target="_blank">
            <button className="btn btn-dark">
              Github Code{" "}
              <i
                className="bx bxl-github"
                style={{ marginLeft: "5px", fontSize: "1.2em" }}
              ></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
