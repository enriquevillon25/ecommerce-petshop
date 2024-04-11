import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

interface LayoutInterface {
  children: JSX.Element;
}
export const Layout = ({ children }: LayoutInterface) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
