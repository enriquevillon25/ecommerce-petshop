import React, { useEffect, useState, useContext } from "react";
import { ProductInterface } from "../interfaces/Product";
import { ProductCartInterface } from "../interfaces/ProductCart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

interface ShoppinCartInterface {
  productsCart: any[];
  totalMount: number;
}

export const useShoppingCart = () => {
  const [showDrawerCart, setShowDrawerCart] = useState<boolean>(false);
  const { productsCart, setProductsCart } = useContext(ShoppingCartContext);

  const productInCart = (product: ProductCartInterface) =>
    productsCart.some((productCart) => productCart.id === product.id);

  const addProductCart = (product: ProductCartInterface) => {
    const inCart = productInCart(product);

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
    const products = inCart ? newProductsCart : [...productsCart, product];
    setProductsCart(products);
    toggleDrawerCart();
  };

  const toggleDrawerCart = () => setShowDrawerCart(!showDrawerCart);

  const totalPrice = () => {
    return productsCart
      .map((product) => product.price)
      .reduce((prevCart, current) => prevCart + current);
  };

  const productLessCart = (product: ProductCartInterface) => {
    const newProductsCart = productsCart.map(
      (productCart: ProductCartInterface) => {
        if (productCart.id === product.id) {
          return {
            ...productCart,
            quantity: productCart.quantity - 1,
            price: productCart.price - product.price,
          };
        }
        return productCart;
      }
    );
    setProductsCart(newProductsCart);
  };

  return {
    addProductCart,
    productsCart,
    toggleDrawerCart,
    showDrawerCart,
    totalPrice,
    productLessCart,
  };
};
