import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { browser, gitHub } from "../assets/icons_white";

const Project = ({ project }) => {
  const { lang } = useContext(LanguageContext);
  const genTechStack = arr =>
    arr.map(el => (
      <div className="project_icon" id={el.name}>
        <img src={el.logo} alt={el.name} />
      </div>
    ));
  return (
    <div className="project">
      <div className="project_title green">{project.title}</div>
      <div className="project_box">
        <img
          className="project_image"
          src={project.picture}
          alt={project.title}
        />
        <div className="project_detail">
          <a href={project.gitHub}>
            <div className="git_hub">
              <img src={gitHub} alt="git hub" />
              Git Hub
            </div>
          </a>
          <a href={project.webSite}>
            <div className="project_link">
              <img src={browser} alt="project link" />
              {lang === "EN" ? "Project " : ""}Link
            </div>
          </a>
        </div>
      </div>
      <div className="project_stack">
        <div className="project_icon">Tech Stack: </div>
        {genTechStack(project.stack)}
      </div>
    </div>
  );
};
export default Project;
