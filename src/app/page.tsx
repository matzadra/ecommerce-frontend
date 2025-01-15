'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchCategoriesThunk } from '@/store/slices/categorySlice';
import { fetchFeaturedProductsThunk } from '@/store/slices/featuredProductsSlice';
import clsx from 'clsx';

import HeroBanner from '@/components/shared/HeroBanner';
import CategorySection from '@/components/homepage/CategorySection';
import FeaturedProducts from '@/components/homepage/FeaturedProducts';
import { useTheme } from '@/hooks/useTheme';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchFeaturedProductsThunk());
  }, [dispatch]);

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'container mx-auto px-4'
      )}
    >
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
