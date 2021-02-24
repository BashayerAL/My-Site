import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - bikes */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/Predicting-Bike-Sharing-Patterns/"
          >
            <div className="project-images" id="bikes"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3> Predicting-Bike-Sharing-Patterns </h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/Predicting-Bike-Sharing-Patterns"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 2 - dogs */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/Dog-Breed-Classifier"
          >
            <div className="project-images" id="dogs"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3> Dog-Classifier </h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/Dog-Breed-Classifier"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>  
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 3 - sagemaker */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/SageMaker-Project"
          >
            <div className="project-images" id="sagemaker"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>SageMaker-Project</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/SageMaker-Project"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 4 - face-project */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/project-face-generation"
          >
            <div className="project-images" id="face"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Project-Face-Generation</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/project-face-generation"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 5 - tv project */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/project-tv-script-generation"
          >
            <div className="project-images" id="tv"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Project-TV-Script-Generation</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/project-tv-script-generation"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 6 - seeds */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BashayerAL/Seeds-Classification"
          >
            <div className="project-images" id="seeds"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Seeds-Classification</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/BashayerAL/Seeds-Classification"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/BashayerAL"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
