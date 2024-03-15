import React, { useEffect, useState } from "react";
import { CategorieInterface } from "../interfaces/Categorie";
import { CategorieService } from "../services/CategorieService";

export const useCategorie = () => {
  const [categories, setCategories] = useState<CategorieInterface[]>();
  const categorieService = new CategorieService();

  useEffect(() => {
    (async () => {
      setCategories(await categorieService.getAll());
    })();
  }, []);

  return { categories };
};
