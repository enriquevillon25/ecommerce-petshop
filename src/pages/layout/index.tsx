import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import "./index.css";
interface LayoutInterface {
  children: JSX.Element;
}
export const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__children">{children}</div>
      <Footer />
    </div>
  );
};
