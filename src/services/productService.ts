import { gql } from "@apollo/client";

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
