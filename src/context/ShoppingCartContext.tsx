import React, { createContext } from "react";

export const ShoppingCartContext = createContext({});

const defaultValue = {
  id: "",
  productsCart: [],
  totalPrice: 0,
};

export const ShoppingCartProvider = ({ children }: any) => {
  return (
    <ShoppingCartContext.Provider value={defaultValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
