import { BrandInterface } from "./Brand";

export interface ProductInterface {
  id: string;
  name: string;
  brand: BrandInterface;
  price: number;
  description: string;
  stock: number;
  image: string;
  // category: string[];
}
