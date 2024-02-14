import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.value = action.payload;
    },

    searchBooks(state, action) {
      state.value = state.value.filter(book => book.title?.includes(action.payload));
    },

    changeStatus(state, action) {
      state.value = state.value.map(book => {
        if (book.id === action.payload) {
          book.is_read =!book.is_read;
        }
        return book;
      });
      sessionStorage.setItem('books', JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, searchBooks, changeStatus } = bookSlice.actions

export default bookSlice.reducer;