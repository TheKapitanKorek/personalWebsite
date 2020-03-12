import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SkillSection from "./SkillSection";
import {
  css,
  express,
  html,
  js,
  mongo,
  node,
  npm,
  react,
  redux,
  git
} from "../assets/icons_green/index.js";
import Title from "./Title";

const skillObjs1 = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "Redux", logo: redux }
];

const skillObjs2 = [
  { name: "Node.js", logo: node },
  { name: "MongoDB", logo: mongo },
  { name: "Express", logo: express }
];
const skillObjs3 = [
  { name: "Git", logo: git },
  { name: "npm", logo: npm }
];
const Skills = props => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="main black">
      <Title title={lang === "EN" ? "Skills" : "Umiejętności"} />
      <div className="content">
        <SkillSection skills={skillObjs1} title="Front End" />
        <SkillSection skills={skillObjs2} title="Back End" />
        <SkillSection skills={skillObjs3} title="Dev Tools" />
      </div>
    </div>
  );
};

export default Skills;
