import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
// import Portfolio2 from "../../assets/portfolio-2.png";
// import Portfolio3 from "../../assets/portfolio-3.png";
// import Portfolio4 from "../../assets/portfolio-4.png";
// import Portfolio5 from "../../assets/portfolio-5.png";
// import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle"> My Portfolio</h2>
      <span className="worksDesc">
        {" "}
        Coding my way to the future, one project at a time.{" "}
      </span>
      <div className="worksImgs">
        <div className="project1">
          <img src={Portfolio1} alt="" className="WorksImg" />
          <p className="projectInfo1">
            Currently working on building a E-Comm Website
          </p>
        </div>
        {/* <img src={Portfolio2} alt="" className="WorksImg" />
        <img src={Portfolio3} alt="" className="WorksImg" />
        <img src={Portfolio4} alt="" className="WorksImg" />
        <img src={Portfolio5} alt="" className="WorksImg" />
        <img src={Portfolio6} alt="" className="WorksImg" /> */}
      </div>
      {/* <button className="workBtn"> see More</button> */}
    </section>
  );
};

export default Works;
