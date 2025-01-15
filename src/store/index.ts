import { configureStore } from '@reduxjs/toolkit';
import featuredProductsReducer from './slices/featuredProductsSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
