import React from "react";
import { Router } from "react-router-dom";

import history from "./../utils/History";
import Main from "./../routes/Main";
import Header from "./header/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <Router history={history}>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    </>
  );
};

export default App;
