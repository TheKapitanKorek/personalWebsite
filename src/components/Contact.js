import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import axios from "axios";
import Title from "./Title";

const Contact = props => {
  const { lang } = useContext(LanguageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const onInputChange = (e, setFunc) => {
    setFunc(e.target.value);
  };

  return (
    <div className="main">
      <Title title={lang === "EN" ? "Contact Me" : "Kontakt"} />
      <div className="text_box">
        {lang === "EN"
          ? "Currently I'm looking for work in technologies centered arround JavaScript, but if You have other propositions or questions you are welcometo contact me."
          : "Obecnie szukam pracy w technologiach powiązanych z językiem JavaScript, jednak jeśli masz jakiekolwiek inne pytania lub propozycje skontaktuj się ze mną."}
      </div>
      <div className="form_box">
        <form
          id="contact_form"
          /*method="POST"
          action="https://us-central1-portfolio-6c3f0.cloudfunctions.net/sendMail"*/
          onSubmit={async el => {
            el.preventDefault();
            setResponse(lang === "EN" ? "Sending ..." : "Wysyłanie ...");
            const {
              data
            } = await axios.post(
              "https://us-central1-portfolio-6c3f0.cloudfunctions.net/sendMail",
              { name, email, subject, message }
            );
            if (data === "ok") {
              setResponse(lang === "EN" ? "Message Sent" : "Wiadomość wysłana");
              setName("");
              setEmail("");
              setSubject("");
              setMessage("");
            } else {
              setResponse(
                lang === "EN"
                  ? "Failed to Send Mesage"
                  : "Nie udało się wysłać wiadomości"
              );
            }
            setTimeout(() => {
              setResponse("");
            }, 6000);
          }}
        >
          <div className="form_row">
            <input
              autoComplete="off"
              required
              className="input"
              type="text"
              id="Name"
              name="name"
              onChange={e => {
                onInputChange(e, setName);
              }}
              value={name}
              placeholder={lang === "EN" ? "Name" : "Imię"}
            />
            <input
              autoComplete="off"
              required
              className="input"
              type="email"
              id="E-mail"
              name="email"
              onChange={e => {
                onInputChange(e, setEmail);
              }}
              value={email}
              placeholder="Email"
            />
          </div>
          <input
            className="input"
            type="text"
            id="Subject"
            name="subject"
            onChange={e => {
              onInputChange(e, setSubject);
            }}
            value={subject}
            placeholder={lang === "EN" ? "Subject" : "Temat"}
          />
          <textarea
            autoComplete="off"
            required
            rows="5"
            id="Message"
            name="message"
            form="contact_form"
            onChange={e => {
              onInputChange(e, setMessage);
            }}
            value={message}
            placeholder={lang === "EN" ? "Message" : "Wiadomość"}
          ></textarea>
          <div className="form_row">
            <div
              className="feedback"
              style={{
                color:
                  response === "Message Sent" ||
                  response === "Sending ..." ||
                  response === "Wysyłanie ..." ||
                  response === "Wiadomość wysłana"
                    ? "#ffffff"
                    : "#ff0000"
              }}
            >
              {response}
            </div>
            <input
              className="input"
              type="submit"
              value={lang === "EN" ? "Submit" : "Wyślij"}
              id="submit_button"
            />
          </div>
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
