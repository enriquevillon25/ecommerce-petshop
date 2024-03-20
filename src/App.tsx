import "./App.css";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { HomePage } from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/ProductsPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { ContactPage } from "./pages/contact/ContactPage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route Component={HomePage} path="" />
          <Route Component={ProductsPage} path="/products" />
          <Route Component={ContactPage} path="/contact" />
          <Route Component={AboutPage} path="/about" />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
