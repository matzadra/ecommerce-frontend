import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFeaturedProducts } from '@/services/productService';
import { Product } from '@/@types/product';

interface FeaturedProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: FeaturedProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Thunk para buscar os produtos em destaque
export const fetchFeaturedProductsThunk = createAsyncThunk(
  'featuredProducts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const products = await fetchFeaturedProducts();
      return products;
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao carregar produtos em destaque.');
    }
  }
);

const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchFeaturedProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default featuredProductsSlice.reducer;
