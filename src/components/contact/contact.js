import React from "react";
import Gmail from "../../assets/Gmail_Logo_128px.png";
import LinkedIn from "../../assets/LinkedIn.jpg";
import PhoneIcon from "../../assets/pngwing.com.png";
import GitHub from "../../assets/github-mark-white.png";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle"> Get in Touch With Me</h1>
        <div className="links">
          <div className="Emailid">
            <img src={Gmail} alt="Gmail" className="link" />
            <h5>yadnenbairagi@gmail.com</h5>
          </div>
          <div className="linkedin">
            <img src={LinkedIn} alt="LinkedIn" className="link" />

            <a
              href="https://www.linkedin.com/in/yadnenbairagi1074"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              LinkedIn/yadnenbairagi1074
            </a>
          </div>
          <div className="Github">
            <img src={GitHub} alt="github" className="link" />
            <a
              href="https://github.com/Yadnen001"
              target="_blank"
              rel="noonener noreferrer"
            >
              <br />
              GitHub/Yadnen001
            </a>
          </div>
          <div className="phoneNo">
            <img src={PhoneIcon} alt="PhoneIcon" className="link" />
            <h5>+91 9820376077</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
