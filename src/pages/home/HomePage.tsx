import React, { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";
import { ProductInterface } from "../../interfaces/Product";
import { BrandService } from "../../services/BrandService";
import { BrandInterface } from "../../interfaces/Brand";
import { useProduct } from "../../hooks/useProduct";
import { useCategorie } from "../../hooks/useCategorie";
import { CardBasicComponent } from "../../components/cardBasicComponent/CardBasicComponent";
import { useBrand } from "../../hooks/useBrand";

export const HomePage = () => {
  const { products } = useProduct();
  const { categories } = useCategorie();
  const { brands } = useBrand();
  useEffect(() => {
    console.log("brands", products);
  }, [products]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        margin: "40px",
        gap: "25px",
      }}
    >
      {products &&
        products.map((product: ProductInterface) => (
          <CardBasicComponent
            key={product.id}
            image={product.image}
            name={product.name}
            onClick={() => {}}
          />
        ))}
    </div>
  );
};
