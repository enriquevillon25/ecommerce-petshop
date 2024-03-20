import { BrandInterface } from "../interfaces/Brand";
import { getFormatDocs } from "./FirebaseService";
import { IData } from "./interfaces/IData";

export class BrandService implements IData<BrandInterface> {
  private path: string = "brands";
  async getAll(): Promise<BrandInterface[]> {
    const brands = await getFormatDocs<BrandInterface>(this.path);
    return brands;
  }
}
