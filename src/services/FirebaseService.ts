import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

export async function getFormatDocs<T>(path: string): Promise<T[]> {
  const ref = collection(db, path);
  const querySnapshot = await getDocs(ref);
  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<T, "id" | "brand">),
  }));
  return documents as T[];
}

// brand: (await getDoc(doc.data().brand)).data(),
