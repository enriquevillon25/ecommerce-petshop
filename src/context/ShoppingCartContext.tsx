import { createContext } from "react";

export const ShoppingCartContext = createContext(undefined);

export const ShoppingCartProvider = ({ children }: any) => {
  return (
    <ShoppingCartContext.Provider value={undefined}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
