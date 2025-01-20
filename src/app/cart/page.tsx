'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import { RootState } from '@/store';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { theme } = useTheme();

  if (cartItems.length === 0) {
    return (
      <p className={clsx(`text-${theme}-secondary`, 'text-center mt-12')}>
        Seu carrinho está vazio.
      </p>
    );
  }

  return (
    <div
      className={clsx(
        `bg-${theme}-background text-${theme}-text`,
        'container mx-auto px-4 py-8'
      )}
    >
      <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
