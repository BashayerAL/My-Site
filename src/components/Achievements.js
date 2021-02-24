import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import ppImage from "./../images/certificates/pp.png";
import deeplImage from "./../images/certificates/deepl.png";
import pathImage from "./../images/certificates/path.png";
import tutor1Image from "./../images/certificates/tutor1.png";
import tutor2Image from "./../images/certificates/tutor2.png";
import thesisImage from "./../images/certificates/thesis.png";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading">Achievements</h1>
      <div className="projects-container">
        {/* Certification 1 - Deep Learning */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={deeplImage}>
            <div className="project-images" id="deepl"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Deep Learning (Nano Dgree Program)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1zlAdKnn8QjqrwCiN5SYaFd2mb2YGDg4V/view?usp=sharing"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 2 - Path */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={pathImage}>
            <div className="project-images" id="path"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Future Path Career Essentials Program</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1kern2EEoMVO7CML8lYocFOqoPOHGyYPj/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 3 - pp(published paper) */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={ppImage}>
            <div className="project-images" id="pp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>A Hybrid Artificial Intelligence Approach to Predict Flight Delay</h3>
            </div>
            <div className="icons">
              <a rel="noopener noreferrer" href="http://www.irphouse.com/ijert20/ijertv13n4_29.pdf" target="_blank">
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 4 - tutor1*/}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={tutor1Image}>
            <div className="project-images" id="tutor1"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Data Analysis Course(Tutor)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1TL-gtAaX2CuuCnKEQGLog5W04mnZ1DPR/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 5 - tutor2 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={tutor2Image}>
            <div className="project-images" id="tutor2"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Cloud Computing Course (Tutor)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1cch9jZxprBQ0R9vm1gm4YRz9S_qHc327/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Certification 6 - Thesis */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={thesisImage}>
            <div className="project-images" id="thesis"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>DEVELOPING A HYBRID ARTIFICIAL INTELLIGENCE APPROACH TO PREDICT FLIGHT DELAY (Thesis)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ChyV9JgratI4cq6lcRBnKBt4kujVk41r/view?usp=sharing"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
    </section>
  );
};

export default Achievements;
