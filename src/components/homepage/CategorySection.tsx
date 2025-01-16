import React from 'react';
import { useGetAllCategoriesQuery } from '@/store/api';
import { Category } from '@/@types/category';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const CategorySection: React.FC = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();
  const { theme } = useTheme();

  if (isLoading) {
    return <p>Carregando categorias...</p>;
  }

  if (error) {
    return <p>Erro ao carregar categorias.</p>;
  }

  const categories = data?.data?.getAllCategories || [];

  return (
    <div
      className={`category-section bg-${theme}-background p-6 rounded-lg shadow-md`}
    >
      <h2 className={`text-${theme}-text text-xl font-bold mb-4`}>
        Categorias
      </h2>
      <motion.ul
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category: Category) => (
          <motion.li
            key={category.id}
            className={`p-4 border border-${theme}-primary rounded-md shadow-sm hover:bg-${theme}-hover transition-all`}
            whileHover={{ scale: 1.1 }}
          >
            <span className={`text-${theme}-text`}>{category.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CategorySection;
