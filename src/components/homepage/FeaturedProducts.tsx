import React from 'react';
import { useGetAllProductsQuery } from '@/store/api';
import { Product } from '@/@types/product';
import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';

const FeaturedProducts: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { theme } = useTheme();

  if (isLoading) {
    return <p>Carregando produtos em destaque...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos em destaque.</p>;
  }

  const featuredProducts = data?.data?.getAllProducts?.slice(0, 3) || [];

  return (
    <div
      className={`featured-products bg-${theme}-background p-6 rounded-lg shadow-md`}
    >
      <h2 className={`text-${theme}-text text-xl font-bold mb-4`}>
        Produtos em Destaque
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product: Product) => (
          <div
            key={product.id}
            className={`p-4 border border-${theme}-primary rounded-md shadow-sm hover:shadow-lg hover:bg-${theme}-hover transition-all`}
          >
            <Image
              src="https://placehold.co/300x300.jpg"
              alt={product.name}
              width={128}
              height={128}
              className="mb-2 w-full h-32 object-cover rounded"
            />
            <h3 className={`font-semibold text-${theme}-text`}>
              {product.name}
            </h3>
            <p className={`text-${theme}-secondary`}>
              R$ {product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
