'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/store/api';
import ProductGallery from '@/components/product/ProductGallery';
import ProductVariations from '@/components/product/ProductVariations';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import Link from 'next/link';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const { data, error, isLoading } = useGetProductByIdQuery(Number(id));

  if (isLoading) {
    return <p>Carregando produto...</p>;
  }

  if (error) {
    return <p>Erro ao carregar o produto.</p>;
  }

  if (!data?.data?.getProductById) {
    return <p>Produto não encontrado.</p>;
  }

  const product = data.data.getProductById;

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'container mx-auto px-4 py-8'
      )}
    >
      {/* Breadcrumbs */}
      <nav className="mb-4">
        <Link
          href={`/`}
          className={clsx(`text-${theme}-primary hover:underline`)}
        >
          Home
        </Link>{' '}
        /{' '}
        <Link
          href={`/product/${product.id}`}
          className={clsx(`text-${theme}-primary hover:underline`)}
        >
          Produto
        </Link>{' '}
        /{' '}
        <span className={clsx(`text-${theme}-secondary`)}>{product.name}</span>
      </nav>

      {/* Conteúdo Principal */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-6">Categoria ID: {product.categoryId}</p>
      <ProductGallery images={product.variations.flatMap((v) => v.images)} />
      <ProductVariations variations={product.variations} />
    </div>
  );
};

export default ProductPage;
