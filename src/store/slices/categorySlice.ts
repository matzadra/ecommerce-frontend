import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAndCategories } from '@/services/productService';
import { Category } from '@/@types/category';

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

// Thunk para buscar categorias e produtos
export const fetchCategoriesThunk = createAsyncThunk(
  'categories/fetch',
  async (_, { rejectWithValue }) => {
    console.log('fetchCategoriesThunk iniciado');
    try {
      const { categories } = await fetchProductsAndCategories();
      console.log('Categorias buscadas:', categories);
      return categories;
    } catch (error) {
      console.error('Erro no fetchCategoriesThunk:', error);
      return rejectWithValue('Erro ao buscar categorias.');
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
