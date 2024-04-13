import { createContext, useState } from "react";
import { ProductCartInterface } from "../interfaces/ProductCart";

interface ShoppingCartContextType {
  productsCart: ProductCartInterface[];
  setProductsCart: React.Dispatch<React.SetStateAction<ProductCartInterface[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  productsCart: [],
  setProductsCart: () => {},
});

export const ShoppingCartProvider = ({ children }: any) => {
  const [productsCart, setProductsCart] = useState<ProductCartInterface[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ productsCart, setProductsCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
