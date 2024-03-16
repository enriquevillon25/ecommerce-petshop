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
    if (productsCart.length > 1) {
      console.log("totalPrice", totalPrice());
    }
  }, [productsCart]);

  const addProductCart = (product: ProductCartInterface) => {
    const isValid = productsCart.some(
      (productsCart) => productsCart.id == product.id
    );
    const newProductsCart = productsCart.map(
      (productCart: ProductCartInterface) => {
        if (productCart.id === product.id) {
          return {
            ...productCart,
            quantity: productCart.quantity + 1,
            price: productCart.price + product.price,
          };
        }
        return productCart;
      }
    );
    const products = isValid ? newProductsCart : [...productsCart, product];
    setProductsCart(products);
    toggleDrawerCart();
  };

  const toggleDrawerCart = () => setShowDrawerCart(!showDrawerCart);

  const totalPrice = () => {
    return productsCart
      .map((product) => product.price)
      .reduce((prevCart, current) => prevCart + current);
  };

  return {
    addProductCart,
    productsCart,
    toggleDrawerCart,
    showDrawerCart,
    totalPrice,
  };
};
