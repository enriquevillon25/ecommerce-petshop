import React from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../config";
import { ProductInterface } from "../interfaces/Product";

interface HttpClient {
  get(): Promise<any>;
}
export class ProductService implements HttpClient {
  private path: string = "products";
  async get(): Promise<any> {
    const foodRef = collection(db, this.path);
    return (await getDocs(foodRef)).docs.map((value) => ({
      ...value.data(),
      id: value.id,
    }));
  }
}
