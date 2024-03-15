import { ProductCart } from "./ProductCart";

export interface ShoppingCart {
  id: string;
  productsCart: ProductCart[];
  totalPrice: number;
}
