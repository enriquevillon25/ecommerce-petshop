import React, { useEffect } from "react";
import { ProductService } from "../../services/ProductService";

export const HomePage = () => {
  const productService = new ProductService();
  useEffect(() => {
    (async () => {
      console.log(await productService.get());
    })();
  }, []);

  return <div>HomePage</div>;
};
