'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchFeaturedProductsThunk } from '@/store/slices/featuredProductsSlice';

const FeaturedProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.featuredProducts
  );

  useEffect(() => {
    dispatch(fetchFeaturedProductsThunk());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando produtos em destaque...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="featured-products">
      <h2 className="text-xl font-bold mb-4">Produtos em Destaque</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-md shadow-sm hover:shadow-lg"
          >
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
