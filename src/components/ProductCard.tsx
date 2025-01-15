import React from "react";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-48 object-cover rounded-md"
    />
    <h3 className="text-lg font-semibold mt-2">{name}</h3>
    <p className="text-gray-600">R$ {price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
