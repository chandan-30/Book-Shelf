import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './book';

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
})