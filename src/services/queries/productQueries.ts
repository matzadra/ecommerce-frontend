import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      name
      price
      stock
      categoryId
    }
  }
`;
