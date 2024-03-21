import { createContext } from "react";

const ShoppingCartContext = createContext(undefined);

export const ShoppingCartProvider = ({ children }: any) => {
  return (
    <ShoppingCartContext.Provider value={undefined}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
