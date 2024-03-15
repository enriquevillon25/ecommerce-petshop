import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { HomePage } from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route Component={HomePage} path="" />
        <Route Component={ProductsPage} path="/products" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
