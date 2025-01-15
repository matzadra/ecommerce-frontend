import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_AND_CATEGORIES } from "../services/productService";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_AND_CATEGORIES);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar dados: {error.message}</p>;

  const { getAllProducts, getAllCategories } = data;

  return (
    <div>
      <Navbar />
      <main className="p-4">
        {getAllCategories.map((category: any) => (
          <section key={category.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getAllProducts
                .filter((product: any) => product.categoryId === category.id)
                .map((product: any) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl="https://placehold.co/300"
                  />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
