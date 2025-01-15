import { Product } from "./product";

export type Category = {
  id: string;
  name: string;
  price: number;
  stock: number;
  product: Product[];
};
