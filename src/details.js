import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import tweetmegif from "./images/tweetmegif.gif";
import ozgif from "./images/ozgif.gif";
import ecomgif from "./images/ecomgif.gif";
import bloggif from "./images/bloggif.gif";
import Resume from "./images/Resume.pdf";
let details = {
  name: "Aykut",
  role: "Full Stack Web Developer.",
  role2: "Data Scientist.",

  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://au.linkedin.com/in/aykut-sarac-80703056",
      className: <FaLinkedin />,
    },
    {
      name: "github",
      url: "https://github.com/aykut-sarac",
      className: <FaGithub />,
    },
    {
      name: "mail",
      url: "mailto:aykut0171@gmail.com",
      className: <FaEnvelope />,
    },
  ],

  resume: Resume,

  aboutme:
    "I'm a self-taught web developer and data scientist based in Melbourne, Australia. My main focus has mostly been on front-end web development and machine learning. Some of the skills demonstrated in this portfolio include HTML, CSS, JavaScript, Bootstrap, React/Redux, Python, TensorFlow. I am currently open to new opportunities.",

  projects: [
    {
      name: "TweetMe",
      description: "A single-page Twitter/Keeper clone with ReactJS",
      imgurl: tweetmegif,
      //tools: "", Tchnology used (should be added projects.js)
      code: "https://github.com/aykut-sarac/TweetMe", // github link
      live: "https://tweeterkeeper.netlify.app/", // live server
    },
    {
      name: "E-commerce Store",
      description: "A phone e-commerce store with GatsbyJS, Paypal API",
      imgurl: ecomgif,
      code: "https://github.com/aykut-sarac/e-commerce-store-react",
      live: "https://e-commerce-react-aykut.netlify.app/",
    },
    {
      name: "Oz-Restaurant",
      description: "A steakhouse restaurant with GatsbyJS, Bootstrap",
      imgurl: ozgif,
      code: "https://github.com/aykut-sarac/gatsby-oz-restaurant",
      live: "https://gatsby-oz-restaurant.netlify.app/",
    },
    {
      name: "Blog",
      description: "A classic Blog website with JavaScript, EJS, MongoDB",
      imgurl: bloggif,
      code: "https://github.com/aykut-sarac/blog-ejs-tut",
      live: "https://arcane-scrubland-28854.herokuapp.com/",
    },
  ],
};

export default details;
