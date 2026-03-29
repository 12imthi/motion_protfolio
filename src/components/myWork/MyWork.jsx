import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

function MyWork() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <div id="work" className="myWork">

      <div className="myWork-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>

      <div className="myWork-container">
        {mywork_data.slice(0, visibleProjects).map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link || "#"}
              target={work.w_link && work.w_link.startsWith("http") ? "_blank" : "_self"}
              rel={work.w_link && work.w_link.startsWith("http") ? "noopener noreferrer" : ""}
              className="project-card"
            >

              {/* IMAGE + HOVER */}
              <div className="image-wrapper">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="projectImage"
                />

                <div className="overlay">
                  <h3>
                    {work.category === "motion" && "Motion Graphics"}
                    {work.category === "graphic" && "Graphic Design"}
                    {work.category === "video" && "Video Editing"}
                  </h3>
                </div>
              </div>

            </a>
          );
        })}
      </div>

    </div>
  );
}

export default MyWork;