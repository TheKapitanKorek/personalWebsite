import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Avatar, Background } from "../assets/img";

const Main = props => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="main">
      <div className="background">
        <div className="gradient"></div>
        <img src={Background} className="bg_img" alt="bg" />
        <img src={Background} className="bg_img rev" alt="bg" />
      </div>
      <h1 id="Home_Title">
        {lang === "EN" ? "Hi I'm" : "Cześć, tutaj"} Tomek,
        <br /> {lang === "EN" ? "aspiring " : "przyszły "}
        <span class="green">web developer</span>
      </h1>
      <img id="Avatar" src={Avatar} alt="Avatar" />
      <div id="Home_text">
        {lang === "EN"
          ? "Self taught Java Script programmer looking for a job / internship."
          : "Samouk, Programista Java Script szukający pierwszej pracy / stażu"}
        <br />{" "}
        {lang === "EN"
          ? "Able to build both client and server side of the web, but I feel like backend is the right place for me."
          : "Potrafię budować full stackowe aplikacje, w przyszłości chciałbym rozwijać się w kierunku backendu."}
        <br />{" "}
        {lang === "EN"
          ? "What I love about coding the most is the analytical approach to solving problems one by one to create something big."
          : "W programowaniu najbardziej podaba mi się analityczne podejście do rozwiązywania problemów pozwalające na stworzenie czegoś dużego."}
      </div>
    </div>
  );
};

export default Main;
