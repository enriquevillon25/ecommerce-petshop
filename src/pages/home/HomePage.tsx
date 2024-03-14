import React, { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";
import { ProductInterface } from "../../interfaces/Product";
import { BrandService } from "../../services/BrandService";
import { BrandInterface } from "../../interfaces/Brand";

export const HomePage = () => {
  const productService = new ProductService();
  const brandService = new BrandService();
  const [products, setProducts] = useState<ProductInterface[]>();
  const [brands, setBrands] = useState<BrandInterface[]>();

  useEffect(() => {
    (async () => {
      const products = await productService.getAll();
      setProducts(products);
      const brands = await brandService.getAll();
      setBrands(brands);
    })();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {products &&
        products.map((value: ProductInterface) => (
          <div key={value.id}>
            <h4>{value.name}</h4>
            <img src={value.image} style={{ width: "100px", height: "50px" }} />
          </div>
        ))}
      {brands && brands.map((brand: BrandInterface) => <h2>{brand.name}</h2>)}
    </div>
  );
};
