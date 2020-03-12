import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import Nav from "./Nav";
import Main from "./Main";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import history from "../history";

const App = () => {
  const [lang, setLang] = useState("EN");

  const setLanguage = lang => {
    setLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      <div id="app">
        <Router history={history}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
