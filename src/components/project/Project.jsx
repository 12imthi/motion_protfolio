import React from "react";
import "./Project.css";
import mywork_data from "../../assets/mywork_data";

function Project() {

  // Get first item from each category
  const motion = mywork_data.find(item => item.category === "motion");
  const graphic = mywork_data.find(item => item.category === "graphic");
  const video = mywork_data.find(item => item.category === "video");

  const projects = [motion, graphic, video];

  return (
    <div id="work" className="myWork">

      <h1 className="title">My Projects</h1>

      <div className="project-container">

        {projects.map((work, index) => (
          work && (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={work.w_img} alt={work.w_name} />
              <h3>
                {work.category === "motion" && "Motion Graphics"}
                {work.category === "graphic" && "Graphic Design"}
                {work.category === "video" && "Video Editing"}
              </h3>
            </a>
          )
        ))}
      </div>

    </div>
  );
}

export default Project;