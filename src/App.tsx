import "./App.css";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { HomePage } from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/ProductsPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FooterComponent } from "./components/footerComponent/FooterComponent";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route Component={HomePage} path="" />
          <Route Component={ProductsPage} path="/products" />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
