'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Link from 'next/link';
import { RootState } from '@/store';
import { useTheme } from '@/hooks/useTheme';

const MiniCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { theme } = useTheme();

  if (cartItems.length === 0) {
    return (
      <div
        className={clsx(
          `bg-${theme}-background border border-${theme}-primary`,
          'p-4 rounded-lg shadow-md text-center text-sm'
        )}
      >
        <p className={`text-${theme}-secondary`}>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center text-sm"
          >
            <div>
              <p className={`text-${theme}-text font-semibold`}>{item.name}</p>
              <p className={`text-${theme}-secondary text-xs`}>
                Quantidade: {item.quantity}
              </p>
            </div>
            <p className={`text-${theme}-primary font-bold`}>
              R$ {(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          href="/cart"
          className={clsx(
            `bg-${theme}-primary text-${theme}-background`,
            'block text-center py-2 rounded-md hover:opacity-90 text-sm font-bold'
          )}
        >
          Ver Carrinho
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
