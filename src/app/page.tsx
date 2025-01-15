'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { fetchProductsAndCategories } from '@/services/productService';

import { Category } from '@/@types/category';
import { Product } from '@/@types/product';
import HeroBanner from '@/components/shared/HeroBanner';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { products, categories } = await fetchProductsAndCategories();
      setProducts(products);
      setCategories(categories);
    };
    fetchData();
  }, []);

  const renderCategorySection = (category: Category) => {
    const filteredProducts = products.filter(
      (product: Product) => product.categoryId === category.id
    );

    return (
      <motion.section
        key={category.id}
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={clsx(`text-${theme}-primary`, 'text-2xl font-bold mb-4')}
        >
          {category.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={'https://placehold.co/300x300.jpg'}
            />
          ))}
        </div>
      </motion.section>
    );
  };

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'container mx-auto px-4'
      )}
    >
      <HeroBanner />
      {categories.map(renderCategorySection)}
    </div>
  );
};

export default HomePage;
