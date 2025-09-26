import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/full_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt="my-profile"
            className="my-profile"
            style={{ width: "350px" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate Motion Graphics Designer who brings ideas to life
              through stunning visuals and smooth animations.
            </p>
            <p>
              Skilled in crafting engaging videos, title animations, and
              promotional content that grab attention and deliver impact.
            </p>
            <p>
              Proficient in industry-standard tools like Photoshop, Illustrator,
              Premiere Pro, and After Effects to create visually compelling
              stories.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Photoshop </p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Illustrator </p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Premiere Pro </p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>After Effects </p> <hr style={{ width: "88%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
