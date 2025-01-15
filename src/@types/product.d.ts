export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  categoryId: string;
  variations: ProductVariation[];
};

export type ProductVariation = {
  id: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  productId: string;
};
