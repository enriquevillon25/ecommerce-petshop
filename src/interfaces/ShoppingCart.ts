import { ProductCartInterface } from "./ProductCart";

export interface ShoppingCart {
  id: string;
  productsCart: ProductCartInterface[];
  totalPrice: number;
}
