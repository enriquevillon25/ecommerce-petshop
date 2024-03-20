import React, { useEffect, useState } from "react";
import { BrandService } from "../services/BrandService";
import { BrandInterface } from "../interfaces/Brand";

export const useBrand = () => {
  const [brands, setBrands] = useState<BrandInterface[]>();
  const brandService = new BrandService();

  useEffect(() => {
    (async () => {
      setBrands(await brandService.getAll());
    })();
  }, []);

  return { brands };
};
