import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import SkillsContent from "./SkillsContent";

const SKILLS = [
  {
    name: "Next Js",
    imgUrl: "nextjs.png",
  },
  {
    name: "Antd",
    imgUrl: "antd.png",
  },
  {
    name: "Redux",
    imgUrl: "redux.png",
  },
  {
    name: "HTML5",
    imgUrl: "html.png",
  },
  {
    name: "Tailwind",
    imgUrl: "tailwind.png",
  },
  {
    name: "Redux Saga",
    imgUrl: "reduxsaga.png",
  },
  {
    name: "Sass",
    imgUrl: "sass.png",
  },
  {
    name: "Typescript",
    imgUrl: "typescript.png",
  },
  {
    name: "Node JS",
    imgUrl: "node.png",
  },
  {
    name: "React JS",
    imgUrl: "react.png",
  },
  {
    name: "ES6",
    imgUrl: "es6.jpg",
  },
  {
    name: "MongoDB",
    imgUrl: "mongodb.jpeg",
  },
  {
    name: "Graphql",
    imgUrl: "graphql.png",
  },
  {
    name: "Javascript",
    imgUrl: "javascript.png",
  },
  {
    name: "Git",
    imgUrl: "git.png",
  },
];

const EXPEREINCES = [
  {
    works: [
      {
        company: "Boostmyshop.",
        desc: "I worked on the design of the new Amazon app. I was responsible for the design of the new app, and the development of the new app.",
        name: "Full stack developer",
        content: [
          "Build a B2B SaaS platform frontend, which enable ecommerece sellers to automate the pricing of the products.",
          "Leading a team of developers in frontend.",
          "Define code architecture decisions to support a high-performance and scalable product.",
          "Handling lifecycles of product releases in collaboration with Product Teams.",
        ],
        tech: "Nextjs, React, Redux, antD, Tailwind, SSO",
      },
    ],
    year: "2021",
    yearTooltip: "May 2021 - Present",
  },
  {
    works: [
      {
        company: "Terrific Minds",
        desc: "I worked on the design of the new ENAVATO app. I was responsible for the design of the new app, and the development of the new app.",
        name: "Full stack developer",
        content: [
          "Design and build scalable system in vehicle telemetry which involves integration of map and realtime communication.",
          "Build a single page application for ads evaluation which includes many custom grids and dynamic components.",
          "Manage website development projects from initial design through completion, optimizing all cross browser and multiplatform compatibility.",
          ,
        ],
        tech: "Nextjs, React, Redux, Node, MongoDB",
      },
    ],
    year: "2019",
    yearTooltip: "Oct 2019 - May 2021",
  },
  {
    works: [
      {
        company: "Teknowmics Solutions",
        desc: "I worked on the design of the new Google app. I was responsible for the design of the new app, and the development of the new app.",
        name: "Frontend developer",
        content: [
          "Worked on creating and managing a full scale B2B DMS(data management system).",
          "Worked on creating a product which enables organizations to automate the creation, retrieval, integration, and enrichment of data using workflows that can be iteratively optimized for efficiency.",
          "R & D experience.",
          "Handling lifecycles of product releases in collaboration with Product Teams.",
        ],
        tech: "React, Jquery, Java, c#, RabbitMQ",
      },
    ],
    year: "2017",
    yearTooltip: "June 2017 - Aug 2019",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {SKILLS.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {EXPEREINCES.map((experience) => {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p
                    className="bold-text"
                    data-tip
                    data-for={experience.yearTooltip}
                  >
                    {experience.year}
                  </p>
                  <ReactTooltip
                    id={experience.yearTooltip}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {experience.yearTooltip}
                  </ReactTooltip>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <SkillsContent work={work} key={index} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
