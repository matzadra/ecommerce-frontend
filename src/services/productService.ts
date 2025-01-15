import { gql } from '@apollo/client';
import createApolloClient from './apolloClient';

export const GET_PRODUCTS_AND_CATEGORIES = gql`
  query {
    getAllProducts {
      id
      name
      price
      stock
      categoryId
    }
    getAllCategories {
      id
      name
    }
  }
`;

export const fetchProductsAndCategories = async () => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_PRODUCTS_AND_CATEGORIES });
  return {
    products: data.getAllProducts,
    categories: data.getAllCategories,
  };
};
