'use client';

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
        'container mx-auto px-4'
      )}
    >
      <HeroBanner />
      <FeaturedProducts />
      <CategorySection />
    </div>
  );
};

export default HomePage;
