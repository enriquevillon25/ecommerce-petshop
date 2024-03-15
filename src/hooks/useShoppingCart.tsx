import React, { useEffect, useState } from "react";
import { ProductInterface } from "../interfaces/Product";
import { ProductCartInterface } from "../interfaces/ProductCart";

interface ShoppinCartInterface {
  productsCart: any[];
  totalMount: number;
}

export const useShoppingCart = () => {
  const [productsCart, setProductsCart] = useState<ProductCartInterface[]>([]);
  const [showDrawerCart, setShowDrawerCart] = useState<boolean>(false);
  useEffect(() => {
    console.log("product cart", productsCart);
  }, []);

  const addProductCart = (product: ProductCartInterface) => {
    const newShoppingCart = [...productsCart, product];
    setProductsCart(newShoppingCart);
    toggleDrawerCart();
  };

  const toggleDrawerCart = () => setShowDrawerCart(!showDrawerCart);

  return { addProductCart, productsCart, toggleDrawerCart, showDrawerCart };
};
