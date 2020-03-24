import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Project from "./Project";
import Title from "./Title";
import { purpleChess, snake, thisWebsite, pandaTracker } from "../assets/img";
import {
  arrow,
  mongo,
  node,
  html,
  css,
  js,
  react
} from "../assets/icons_white";
const projects = [
  {
    stack: [
      { name: "node", logo: node },
      { name: "mongo", logo: mongo },
      { name: "js", logo: js },
      { name: "css", logo: css },
      { name: "html", logo: html }
    ],
    picture: purpleChess,
    title: "Purple Chess",
    gitHub: "https://github.com/TheKapitanKorek/PurpleChess",
    webSite: "http://purple-chess.herokuapp.com/"
  },
  {
    stack: [
      { name: "js", logo: js },
      { name: "css", logo: css },
      { name: "html", logo: html }
    ],
    picture: snake,
    title: "Snake for two",
    gitHub: "https://github.com/TheKapitanKorek/snake",
    webSite: "https://thekapitankorek.github.io/snake"
  },
  {
    stack: [
      { name: "js", logo: js },
      { name: "css", logo: css },
      { name: "react", logo: react }
    ],
    picture: thisWebsite,
    title: "This Website",
    gitHub: "https://github.com/TheKapitanKorek/personalWebsite",
    webSite: "/"
  },
  {
    stack: [{ name: "js", logo: js }],
    picture: pandaTracker,
    title: "PandaTracker (data processing on client side)",
    gitHub: "https://gitlab.com/Neurochrom/pandatracker/-/tree/master/front",
    webSite: "http://pandatracker.org/"
  }
];

const findProjectIndex = (dir, cur) => {
  const length = projects.length;
  if (dir === ">") {
    if (cur >= length - 1) {
      return 0;
    }
    return cur + 1;
  } else if (dir === "<") {
    if (cur <= 0) {
      return length - 1;
    }
    return cur - 1;
  }
};

const Portfolio = props => {
  console.log(projects[0]);
  const [project, setProject] = useState(0);
  const { lang } = useContext(LanguageContext);
  const renderDots = selectedProject => {
    const dots = [];
    for (let i = 0; i < projects.length; i++) {
      dots.push(
        <div
          className={`dot${i === selectedProject ? " selected" : ""}`}
          onClick={() => {
            setProject(i);
          }}
        />
      );
    }
    return dots;
  };
  return (
    <div className="main">
      <Title title={lang === "EN" ? "Projects" : "Projekty"} />
      <div className="carousel">
        <button
          className="button left"
          onClick={() => {
            setProject(findProjectIndex("<", project));
          }}
        >
          <img src={arrow} alt="arrow icon left" />
        </button>
        <button
          className="button right"
          onClick={() => {
            setProject(findProjectIndex(">", project));
          }}
        >
          <img src={arrow} alt="arrow icon right" />
        </button>
        <Project project={projects[project]} />
        <div className="dots">{renderDots(project)}</div>
      </div>
    </div>
  );
};
export default Portfolio;
