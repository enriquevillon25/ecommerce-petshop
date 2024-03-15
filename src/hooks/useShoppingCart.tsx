import React, { useState } from "react";
import { ProductInterface } from "../interfaces/Product";

interface ShoppinCartInterface {
  productsCart: any[];
  totalMount: number;
}

export const useShoppingCart = () => {
  const [productsCart, setProductsCart] = useState<ProductInterface[]>([]);
  const [showDrawerCart, setShowDrawerCart] = useState<boolean>(false);

  const addProductCart = (product: ProductInterface) => {
    const newShoppingCart = [...productsCart, product];
    console.log("new shopping cart", newShoppingCart);
    setProductsCart(newShoppingCart);
  };

  const toggleDrawerCart = () => setShowDrawerCart(!showDrawerCart);

  return { addProductCart, productsCart, toggleDrawerCart, showDrawerCart };
};
