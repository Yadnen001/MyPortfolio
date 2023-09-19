import React from "react";
import Gmail from "../../assets/Gmail_Logo_128px.png";
import LinkedIn from "../../assets/LinkedIn.jpg";
import PhoneIcon from "../../assets/pngwing.com.png";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <div className="links">
          <div className="Emailid">
            <img src={Gmail} alt="Gmail" className="link" />
            <h5>yadnenbairagi@gmail.com</h5>
          </div>
          <div className="linkedin">
            <img src={LinkedIn} alt="LinkedIn" className="link" />
            <br />
            <a
              href="https://www.linkedin.com/in/yadnenbairagi1074"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn/yadnenbairagi1074
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
