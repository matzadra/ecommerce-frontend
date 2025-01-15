"use client";

import React from "react";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => (
  <div className="bg-secondary text-text p-4 rounded shadow-lg">
    <Image
      src="https://placehold.co/300x300.jpg"
      alt={name}
      className="w-full h-48 object-cover rounded-md"
      width={300}
      height={300}
    />
    <h3 className="font-title text-lg mt-2">{name}</h3>
    <p className="font-body text-primary">R$ {price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
