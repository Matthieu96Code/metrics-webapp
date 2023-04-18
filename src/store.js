import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './redux/ItemSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
