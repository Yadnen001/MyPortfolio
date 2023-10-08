import React from "react";
import "./skills.css";
import UiDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
// import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {" "}
        I bring a strong skill set to the world of web development. My expertise
        includes the MERN stack, allowing me to craft powerful web applications.
        <br />
        I'm also adept at using Figma to create intuitive user interfaces. Let's
        embark on a journey to build innovative digital experiences together.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UiDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            {/* <p>This Is demo , write Your Own content</p> */}
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="UiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            {/* <p>This Is demo , write Your Own content</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
