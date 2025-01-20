'use client';

import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@/hooks/useTheme';
import HeroBanner from '@/components/shared/HeroBanner';
import FeaturedProducts from '@/components/homepage/FeaturedProducts';
import CategorySection from '@/components/homepage/CategorySection';

const HomePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'min-h-screen flex flex-col'
      )}
    >
      <main className="flex-grow">
        <HeroBanner />
        <section className="my-12">
          <CategorySection />
        </section>
        <section className="my-12">
          <FeaturedProducts />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
