import createApolloClient from './apolloClient';
import { GET_ALL_PRODUCTS } from './queries/productQueries';
import { GET_ALL_CATEGORIES } from './queries/categoryQueries';

export const fetchAllProducts = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_ALL_PRODUCTS });
  return data.getAllProducts;
};

export const fetchAllCategories = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_ALL_CATEGORIES });
  return data.getAllCategories;
};

export const fetchProductsAndCategories = async () => {
  const client = createApolloClient();
  const { data: productsData } = await client.query({
    query: GET_ALL_PRODUCTS,
  });
  const { data: categoriesData } = await client.query({
    query: GET_ALL_CATEGORIES,
  });

  return {
    products: productsData.getAllProducts,
    categories: categoriesData.getAllCategories,
  };
};

export const fetchFeaturedProducts = async () => {
  const { products } = await fetchProductsAndCategories();
  return products.slice(0, 3);
};
