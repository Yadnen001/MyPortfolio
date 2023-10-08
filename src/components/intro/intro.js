import React from "react";
import "./intro.css";
//import bg from "../../assets/yadnen.png";
// import btnimg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'M <span className="introName">Yadnen,</span> <br /> A Full-Stack
          Developer
        </span>
        <p className="introPara">
          I am a skilled Web Developer with experience in developing and
          managing Web Apps.{" "}
        </p>
        <Link>
          <button className="btn">
            <a
              href="https://drive.google.com/drive/folders/1J7_nDndYh0c6dcBPCLNehAaE7i5JFY6c?usp=drive_link"
              class="button"
              target="_blank"
              rel="noonener noreferrer"
            >
              RESUME
            </a>
          </button>
        </Link>
      </div>
      {/* <img src={bg} alt="" className="bg" /> */}
    </section>
  );
};

export default Intro;
