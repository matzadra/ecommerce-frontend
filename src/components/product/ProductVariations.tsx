'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';

interface Variation {
  id: string;
  color: string;
  price: number;
  stock: number;
  images: string[];
}

interface ProductVariationsProps {
  variations: Variation[];
}

const ProductVariations: React.FC<ProductVariationsProps> = ({
  variations,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'product-variations p-6 rounded-lg shadow-lg'
      )}
    >
      <h2 className="text-xl font-semibold mb-4">Variações Disponíveis</h2>
      {variations.map((variation) => (
        <motion.div
          key={variation.id}
          className={clsx(
            `border border-${theme}-primary`,
            'p-4 rounded-md mb-4 shadow-sm hover:shadow-lg hover:bg-opacity-90 transition-all'
          )}
          whileHover={{ scale: 1.02 }}
        >
          <p>
            <strong>Cor:</strong> {variation.color}
          </p>
          <p>
            <strong>Preço:</strong> R$ {variation.price.toFixed(2)}
          </p>
          <p>
            <strong>Estoque:</strong> {variation.stock}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductVariations;
