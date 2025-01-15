'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchCategoriesThunk } from '@/store/slices/categorySlice';

const CategorySection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    console.log('Dispatching fetchCategoriesThunk');
    if (categories.length === 0) {
      dispatch(fetchCategoriesThunk());
    }
  }, [dispatch, categories.length]);

  console.log({ categories, loading, error });

  if (loading || categories.length === 0) {
    return <p>Carregando categorias...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="category-section">
      <h2 className="text-xl font-bold mb-4">Categorias</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <li key={category.id} className="p-4 border rounded-md shadow-sm">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;
