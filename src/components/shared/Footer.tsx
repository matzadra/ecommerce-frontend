'use client';

import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@/hooks/useTheme';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={clsx(
        `${theme}-background text-${theme}-text`,
        'py-4 flex justify-center items-center'
      )}
    >
      <p>&copy; 2025 E-Commerce. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
