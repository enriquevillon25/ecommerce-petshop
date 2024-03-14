import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <HomePage />
    </Fragment>
  );
}

export default App;
