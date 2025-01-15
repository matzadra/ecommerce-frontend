'use client';

import React from 'react';

const ProductPlaceholder: React.FC = () => {
  return (
    <div className="minimalist-future h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Detalhes do Produto</h1>
      <p className="text-lg mt-4">
        Estamos carregando as informações do produto. Por favor, aguarde...
      </p>
    </div>
  );
};

export default ProductPlaceholder;
