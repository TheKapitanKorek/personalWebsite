import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { home, gear, bag, mail } from "../assets/icons_white";

const Nav = props => {
  const { lang, setLanguage } = useContext(LanguageContext);
  return (
    <div className="nav">
      <div className="lang">
        <button
          onClick={() => {
            setLanguage("EN");
          }}
          aria-label="set language to english"
          className="el green"
        >
          EN
        </button>
        <button
          onClick={() => {
            setLanguage("PL");
          }}
          aria-label="set language to polish"
          className="pl green"
        >
          PL
        </button>
      </div>
      <div className="links">
        <Link to="/" className="link_box">
          <div className="nav_img">
            <img src={home} alt="home icon" />
          </div>
          <div className="nav_text">
            {lang === "EN" ? "HOME" : "STRONA GŁÓWNA"}
          </div>
        </Link>
        <Link to="/skills" className="link_box">
          <div className="nav_img">
            <img src={gear} alt="gear icon" />
          </div>
          <div className="nav_text">
            {lang === "EN" ? "SKILLS" : "ZDOLNOŚCI"}
          </div>
        </Link>
        <Link to="/portfolio" className="link_box">
          <div className="nav_img">
            <img src={bag} alt="case icon" />
          </div>
          <div className="nav_text">
            {lang === "EN" ? "PROJECTS" : "PROJEKTY"}
          </div>
        </Link>
        <Link to="/contact" className="link_box">
          <div className="nav_img">
            <img src={mail} alt="letter img" />
          </div>
          <div className="nav_text">
            {lang === "EN" ? "CONTACT" : "KONTAKT"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
