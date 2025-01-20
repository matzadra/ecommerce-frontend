'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '@/store/slices/cartSlice';
import { useTheme } from '@/hooks/useTheme';
import clsx from 'clsx';
import { CartItem as CartItemType } from '@/@types/cart';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (amount: number) => {
    dispatch(updateQuantity({ id: item.id, quantity: amount }));
  };

  return (
    <div
      className={clsx(
        `bg-${theme}-background border border-${theme}-primary`,
        'flex items-center justify-between p-4 rounded-lg shadow-sm'
      )}
    >
      <Image
        src={'https://placehold.co/300x300.jpg'}
        alt={item.name}
        width={128}
        height={128}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h2 className={clsx(`text-${theme}-text`, 'text-lg font-semibold')}>
          {item.name}
        </h2>
        <p className={clsx(`text-${theme}-secondary`)}>
          R$ {item.price.toFixed(2)}
        </p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={clsx(
              `border border-${theme}-primary`,
              'px-3 py-1 rounded-md'
            )}
          >
            -
          </button>
          <span className="mx-3">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className={clsx(
              `border border-${theme}-primary`,
              'px-3 py-1 rounded-md'
            )}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className={clsx(`text-${theme}-primary hover:underline ml-4`)}
      >
        Remover
      </button>
    </div>
  );
};

export default CartItem;
