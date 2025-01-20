'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import { RootState } from '@/store';

const CartSummary: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { theme } = useTheme();

  const subtotal = cartItems.reduce(
    (acc: number, item) => acc + item.price * item.quantity,
    0
  );

  const taxes = subtotal * 0.1; // Exemplo: 10% de impostos
  const total = subtotal + taxes;

  return (
    <div
      className={clsx(
        `bg-${theme}-background border border-${theme}-primary`,
        'p-6 rounded-lg shadow-sm'
      )}
    >
      <h2 className={clsx(`text-${theme}-text`, 'text-xl font-bold mb-4')}>
        Resumo do Carrinho
      </h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Impostos (10%):</span>
        <span>R$ {taxes.toFixed(2)}</span>
      </div>
      <div
        className={clsx(
          `text-${theme}-text`,
          'flex justify-between font-bold text-lg'
        )}
      >
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <button
        className={clsx(
          `bg-${theme}-primary text-${theme}-background`,
          'mt-6 w-full py-2 rounded-md hover:opacity-90'
        )}
      >
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartSummary;
