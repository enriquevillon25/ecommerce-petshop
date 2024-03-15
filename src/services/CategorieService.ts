import { ProductInterface } from "../interfaces/Product";
import { IData } from "./interfaces/IData";
import { getFormatDocs } from "./FirebaseService";
import { CategorieInterface } from "../interfaces/Categorie";

export class CategorieService implements IData<CategorieInterface> {
  private path: string = "categories";

  async getAll(): Promise<CategorieInterface[]> {
    const categories = await getFormatDocs<CategorieInterface>(this.path);
    return categories;
  }
}
