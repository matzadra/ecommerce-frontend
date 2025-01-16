'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '@/hooks/useTheme';

const HeroBanner: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={clsx(
        `bg-${theme}-primary text-${theme}-background`,
        'p-6 md:p-12 mb-8 md:mb-12 text-center rounded-lg shadow-lg'
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
        Bem-vindo ao Futuro do E-Commerce
      </h1>
      <p className="text-lg md:text-xl">
        Descubra as melhores categorias e produtos exclusivos.
      </p>
    </motion.div>
  );
};

export default HeroBanner;
