import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const FILTER_WORK = [
  {
    codeLink: "",
    description:
      "A Saas application to automate the pricing in e-commerce platforms.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://pricing.boostmyshop.com/",
    tags: ["React JS"],
    title: "Pricing",
    modal: {
      name: "Pricing",
      content:
        " A Subscription based Saas appication platform to automate the pricing of products in ecommerece platforms. Mainly focused on European market, going to be a game changer in pricing automation.",
      work: [
        "Lead the frontend team and managed a group of 4 people including UX team.",
        "Constantly involved in overall architecture and system designs discussions with backend team",
        "Involved with UX team to provide an intuitive user experience",
      ],
      tools: "Nextjs,React, Redux,SSO, antD",
      link: "https://pricing.boostmyshop.com/",
    },
    imgUrl:"pricing.png"
  },
  {
    codeLink: "",
    description:
      "Advanced Cloud-Based Video Telematics, Vehicle Cameras & Computer Vision.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://www.visiontrack.com/",
    tags: ["React JS"],
    title: "Vision Track",
    modal: {
      name: "Vision Track",
      content:
        "Advanced Cloud-Based Video Telematics, Vehicle Cameras & Computer Vision. As Europe’s leading provider of cloud-based video telematics, continually innovating with the development of world-leading algorithms, behaviour and video analytics,etc.",
      work: [
        "Worked in a vehicle tracking systems,integrated here maps and real time notification system.",
        "Directly involved with the client and lead the frontend team ",
      ],
      tools: "React, Here Maps, Redux, Material UI",
      link: "https://www.visiontrack.com/",
    },
    imgUrl:"visionTrack.jpg"
  },
  {
    codeLink: "",
    description: "Advanced sponsorship valuation platform.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://turnstilegroup.com/",
    tags: ["React JS"],
    title: "Ads evaluation platform",
    modal: {
      name: "Ads evaluation platform",
      content:
        "Turnstile was built specifically to provide a pricing mechanism that is highly accurate, credible and defensible for sponsorship industry",
      work: [
        "Managed a pretty complex page which includes lot of custom grids and dynamic components",
        "Trained junior developers in frontend Teknowledgies",
      ],
      tools: "Nextjs, Ag-grid, Redux",
      link: "https://turnstilegroup.com/",
    },
    imgUrl:"turnstile.svg"
  },
  {
    codeLink: "",
    description:
      "A digital platform that reshapes the way charities fundraise and people donate.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://ankurfortheworld.com/",
    tags: ["React JS"],
    title: "Ankur for the world",
    modal: {
      name: "Ankur for the world",
      content: "A simple website primarily made for a charity trust ",
      work: [],
      tools: "React, Stripe",
      link: "https://ankurfortheworld.com/",
    },
    imgUrl:"ankur.jpeg"
  },
  {
    codeLink: "",
    description:
      "A DMS(Data management system) for automaticing the workflows in an organization or a system.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://www.teknowmics.com/en/index.html",
    tags: ["React JS"],
    title: "Smart Docs",
    modal: {
      name: "Smart Docs",
      content:
        "A DMS(Data management system) for automaticing the workflows in an organization or a system.",
      work: [
        "Worked in the frontend part and involved in the overall architecture of product",
        "Handled a backend module which is written in c# and java",
      ],
      tools: "React, Jquery, c#,Java, RabbitMq",
      link: "https://www.teknowmics.com/en/index.html",
    },
    imgUrl:"smartdocs.png"
  },
  {
    codeLink: "",
    description: "A pdfviewer for viewing documents and adding annotations.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "https://www.teknowmics.com/en/index.html",
    tags: ["React JS"],
    title: "Pdf Viewer",
    modal: {
      name: "Pdf Viewer",
      content:
        "A pdfviewer for viewing documents and adding annotations. Made as third party module for main application",
      work: ["Integrated pdfjs with react to create a document viewer section"],
      tools: "React, pdfjs",
      link: "https://www.teknowmics.com/en/index.html",
    },
    imgUrl:"pdfjs.png"
  },
  {
    codeLink: "",
    description: "Full stack chatting app with realtime communication.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "",
    tags: ["Node JS", "Personal Projects"],
    title: "Chat-App",
    modal: {
      name: "Chat-App",
      content:
        "Full stack chatting app with realtime communication. Users can register with their email and start interacting with other userts real time.",
      work: [
        "Created entire backend section using express and MongoDB",
        "Integrated socket.io for real time communication",
      ],
      tools: "React, Node, MongoDB, socket.io",
      link: "",
    },
    imgUrl:"chatapp.jpg"
  },
  {
    codeLink: "",
    description: "Full stack app to schedule appointments.",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
      },
    },
    projectLink: "",
    tags: ["Node JS", "Personal Projects"],
    title: "Scheduler-App",
    modal: null,
    imgUrl:"scheduler.jpg"
  },
  {
    codeLink: "",
    description: "A decentralized cryptocurrency exchage react application.",
    imgUrl: "progress.png",
    projectLink: "",
    tags: ["Web3", "Personal Projects"],
    title: "Work in progress",
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [modalContent, setModalContent] = useState({});

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
    },
  };

  useEffect(() => {
    setWorks(FILTER_WORK);
    setFilterWork(FILTER_WORK);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["React JS", "Node JS", "Web3", "Personal Projects", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item app__flex"
            key={index}
            onClick={() => {
              if (work.modal) {
                setModalContent(work.modal);
                setIsOpen(true);
              }
            }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <Modal style={customStyles} isOpen={isOpen}>
        <div className="app__modal">
          <div className="app__title">
            <h2 className="bold-text">{modalContent.name}</h2>
            <HiOutlineX size={30} onClick={() => setIsOpen(false)} />
          </div>
          <div className="app__content">
            <p>{modalContent.content}</p>
            <br />
            <ul>
              {modalContent.work &&
                modalContent.work.map((item) => <li>{item}</li>)}
            </ul>
          </div>
          <div className="app__tools">
            <h4>Tools and Teknowledgies : </h4>
            <p className="bold-text">{` ${modalContent.tools}`}</p>
          </div>
          <a href={modalContent.link} target="_blank" rel="noreferrer">
            Click here for project link..
          </a>
        </div>
      </Modal>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
