'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const { theme } = useTheme();

  return (
    <div className="product-gallery grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.length > 0 ? (
        <motion.div
          className={clsx(
            `border border-${theme}-primary rounded-lg`,
            'p-4 shadow-lg'
          )}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={images[0]}
            width={300}
            height={300}
            alt="Imagem principal"
            className="w-full h-auto rounded"
          />
        </motion.div>
      ) : (
        <p>Sem imagens disponíveis</p>
      )}
      <div className="grid grid-cols-3 gap-2">
        {images.slice(1).map((image, index) => (
          <motion.img
            key={index}
            src={image}
            width={300}
            height={300}
            alt={`Imagem ${index}`}
            className={clsx(
              `border border-${theme}-secondary`,
              'w-full h-auto rounded cursor-pointer'
            )}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
