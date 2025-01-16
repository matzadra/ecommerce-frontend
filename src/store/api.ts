import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/@types/product';
import { Category } from '@/@types/category';

type GetAllProductsResponse = {
  data: {
    getAllProducts: Product[];
  };
};

type GetAllCategoriesResponse = {
  data: {
    getAllCategories: Category[];
  };
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql',
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<GetAllCategoriesResponse, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query {
              getAllCategories {
                id
                name
                products {
                  id
                  name
                }
              }
            }
          `,
        },
      }),
    }),
    getAllProducts: builder.query<GetAllProductsResponse, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query {
              getAllProducts {
                id
                name
                price
                stock
                categoryId
                variations {
                  id
                  color
                  size
                  price
                  stock
                }
              }
            }
          `,
        },
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllProductsQuery } = api;
