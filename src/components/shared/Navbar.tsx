'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '@/store';
import MiniCart from '@/components/cart/MiniCart';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [showMiniCart, setShowMiniCart] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const themes = ['green-code', 'cyber-luxury', 'minimalist-future'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  const handleMiniCartToggle = () => {
    setShowMiniCart((prev) => !prev);
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMiniCart(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'p-4 flex justify-between items-center relative'
      )}
    >
      <h1 className="font-title text-2xl">E-Commerce</h1>
      <div className="flex items-center space-x-6">
        {/* Botão de Tema */}
        <button
          onClick={handleToggle}
          className={clsx(
            `bg-${theme}-accent text-${theme}-background`,
            'px-4 py-2 rounded'
          )}
        >
          Toggle Theme
        </button>

        {/* Carrinho com Mini-Cart */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleMiniCartToggle}
            className={clsx(
              `text-${theme}-text hover:text-${theme}-primary`,
              'relative flex items-center'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6M7 13h10l-1.2 6M10 21h4M4 7h16"
              />
            </svg>
            {/* Indicador de Itens no Carrinho */}
            {cartItemsCount > 0 && (
              <span
                className={clsx(
                  `bg-${theme}-primary text-${theme}-background`,
                  'absolute top-0 right-0 translate-x-2 -translate-y-2 px-2 py-1 rounded-full text-xs font-bold'
                )}
              >
                {cartItemsCount}
              </span>
            )}
          </button>
          {/* Mini-Cart Dropdown */}
          {showMiniCart && (
            <div
              className={clsx(
                `bg-${theme}-background border border-${theme}-primary`,
                'absolute right-0 mt-2 z-50 w-64 max-h-80 overflow-y-auto p-4 rounded-lg shadow-lg'
              )}
            >
              <MiniCart />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
