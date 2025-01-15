import React from "react";
import createApolloClient from "../services/apolloClient";
import { GET_PRODUCTS_AND_CATEGORIES } from "../services/productService";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/shared/Navbar";

import { Category } from "@/@types/category";
import { Product } from "@/@types/product";

const HomePage = async () => {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_PRODUCTS_AND_CATEGORIES,
  });

  const { getAllProducts, getAllCategories } = data;

  return (
    <div>
      <Navbar />
      <main className="p-4">
        {getAllCategories.map((category: Category) => (
          <section key={category.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getAllProducts
                .filter(
                  (product: Product) => product.categoryId === category.id
                )
                .map((product: Product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl="https://placehold.co/300x300.jpg"
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
