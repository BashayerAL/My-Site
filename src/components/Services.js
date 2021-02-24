import React from "react";
import "./../index.css";
import miImage from "./../images/mi.svg";
import uiImage from "./../images/ui.svg";
import onImage from "./../images/on.svg";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Web Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={miImage} alt="" />
            <p>Machine and Deep Learning Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={onImage} alt="" />
            <p>Tutoring</p>
          </li>
        </div>

      </div>
    </section>
  );
};

export default Services;
