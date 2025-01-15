import React from "react";

const CartPlaceholder: React.FC = () => {
  return (
    <div className="minimalist-future h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Carrinho</h1>
      <p className="text-lg mt-4">
        Seu carrinho está vazio no momento. Adicione produtos para começar!
      </p>
    </div>
  );
};

export default CartPlaceholder;
