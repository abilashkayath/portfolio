import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { useState } from "react";

const SkillsContent = ({ work }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  console.log("work...", work);
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills-exp-work"
        data-tip
        data-for={work.name}
        key={work.name}
      >
        <h4 className="bold-text">{work.name}</h4>
        <div style={{ display: "flex" }} onClick={handleExpand}>
          <p className="p-text">{work.company}</p>
          {expand ? (
            <HiChevronUp style={{ marginTop: "7px" }} />
          ) : (
            <HiChevronDown
              style={{ marginTop: "7px" }}
              onClick={handleExpand}
            />
          )}
        </div>
        {expand && (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={work.name}
          >
            <ul className="ul-special" style={{ marginTop: "5px" }}>
              {work.content.map((item) => (
                <li className="p-text">{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
        <p
          className="p-text"
          style={{ fontWeight: 1000 }}
        >{`Technologies used: ${work.tech}`}</p>
      </motion.div>
    </>
  );
};

export default SkillsContent;
