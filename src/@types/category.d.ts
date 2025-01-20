import { Product } from './product';

export type Category = {
  id: string;
  name: string;
  product: Product[];
};
