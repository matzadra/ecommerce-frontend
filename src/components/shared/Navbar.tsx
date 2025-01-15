'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const themes = ['green-code', 'cyber-luxury', 'minimalist-future'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <nav
      className={clsx(
        `${theme}-background text-${theme}-text`,
        'p-4 flex justify-between items-center'
      )}
    >
      <h1 className="font-title text-2xl">E-Commerce</h1>
      <button
        onClick={handleToggle}
        className={clsx(
          `${theme}-accent text-${theme}-background`,
          'px-4 py-2 rounded'
        )}
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
