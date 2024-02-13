import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default bookSlice.reducer;