import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) { // Reducer for setting books data.
      state.value = action.payload;
    },

    searchBooks(state, action) { // Reducer for searching books by title.
      state.value = state.value.filter(book => book.title?.includes(action.payload));
    },

    changeStatus(state, action) { // Reducer for changing read status of a book.
      state.value = state.value.map(book => {
        if (book.id === action.payload) {
          book.is_read =!book.is_read;
        }
        return book;
      });
      sessionStorage.setItem('books', JSON.stringify(state.value)); // Update sessionStorage with updated books data.
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, searchBooks, changeStatus } = bookSlice.actions

export default bookSlice.reducer;