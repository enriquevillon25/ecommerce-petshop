import { ProductInterface } from "../interfaces/Product";
import { IData } from "./interfaces/IData";
import { getFormatDocs } from "./FirebaseService";

export class ProductService implements IData<ProductInterface> {
  private path: string = "products";

  async getAll(): Promise<ProductInterface[]> {
    const products = await getFormatDocs<ProductInterface>(this.path);
    return products;
  }
}
