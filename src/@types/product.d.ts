export type Product = {
  id: string;
  name: string;
  categoryId: string;
  variations: ProductVariation[];
};

export type ProductVariation = {
  id: string;
  color: string;
  price: number;
  stock: number;
  productId: string;
  images: string[];
};
