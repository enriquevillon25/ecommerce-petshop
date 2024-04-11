import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/products/ProductsPage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ContactPage } from "./pages/contact/ContactPage";
import { AboutPage } from "./pages/about/AboutPage";
import { ShoppingCart } from "./pages/shoppingCart/ShoppingCart";
import { Layout } from "./pages/layout";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<HomePage />} path="" />
            <Route element={<ProductsPage />} path="/products" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ShoppingCart />} path="/shopping-cart" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
