import { useEffect, useState } from "react";
import { ProductInterface } from "../interfaces/Product";
import { ProductService } from "../services/ProductService";
import { getDoc } from "firebase/firestore";

export const useProduct = () => {
  const [products, setProducts] = useState<ProductInterface[]>();
  const productService = new ProductService();

  useEffect(() => {
    (async () => {
      const productsEntrity = await productService.getAll();
      const productsWithBrandData = await Promise.all(
        productsEntrity.map(async (product: ProductInterface) => {
          const brandSnapshot = await getDoc(product.brand);
          if (brandSnapshot.exists()) {
            const brandData = brandSnapshot.data();
            return { ...product, brand: brandData };
          }
          return product;
        })
      );
      setProducts(productsWithBrandData);
    })();
  }, []);

  return { products };
};
