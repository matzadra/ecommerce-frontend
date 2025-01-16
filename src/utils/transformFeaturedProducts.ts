import { Product } from '@/@types/product';

export const transformFeaturedProducts = (products: Product[]) =>
  products.slice(0, 3);
