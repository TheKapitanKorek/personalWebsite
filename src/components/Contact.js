import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Title from "./Title";

const Contact = props => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="main">
      <Title title={lang === "EN" ? "Contact Me" : "Kontakt"} />
      <div className="text_box">
        {lang === "EN"
          ? "Currently I'm looking for work in technologies centered arround JavaScript, but if You have other propositions or questions you are welcometo contact me."
          : "Obecnie szukam pracy w technologiach powiązanych z językiem JavaScript, jednak jeśli masz jakiekolwiek inne pytania lub propozycje skontaktuj się ze mną."}
      </div>
      <div className="form_box">
        <form id="contact_form">
          <div className="form_row">
            <input
              className="input"
              type="text"
              id="Name"
              placeholder={lang === "EN" ? "Name" : "Imię"}
            />
            <input
              className="input"
              type="text"
              id="E-mail"
              placeholder="Email"
            />
          </div>
          <input
            className="input"
            type="text"
            id="Subject"
            placeholder={lang === "EN" ? "Subject" : "Temat"}
          />
          <textarea
            rows="5"
            name="Message"
            id="Message"
            form="contact_form"
            placeholder={lang === "EN" ? "Message" : "Wiadomość"}
          ></textarea>
          <input
            className="input"
            type="submit"
            value={lang === "EN" ? "Submit" : "Wyślij"}
            id="submit_button"
          />
        </form>
      </div>
      <div className="contact_info">
        <div>E-mail: tomplomin@gmail.com</div>
        <div>{lang === "EN" ? "Phone" : "Telefon"}: +48 531 920 930</div>
      </div>
    </div>
  );
};

export default Contact;
