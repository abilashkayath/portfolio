import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const ABOUT_DATA = [
  {
    description:
      "I am a frontend developer with more than 5 years of experience in building functional web applications.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    title: "Frontend Developer",
  },
  {
    description:
      "Experience in restfull webservice development using Express, Nodejs and MongoDB. Keenly looking for more options",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-b62651ef34a9e54c354ee437545acc348fbf0505-1200x900-png",
      },
    },
    title: "Backend developer",
  },
  {
    description:
      "Good amount of experience in managing, guiding and building a team, and delivering the objectives within a timeframe.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900-png",
      },
    },
    title: "Team lead",
  },
  {
    description:
      "Good at analytical, decision making and communication skills.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900-png",
      },
    },
    title: "Problem solver",
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Developer</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {ABOUT_DATA.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
