import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  total: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
    reducers: {
      increase: (state) => {
        state.total += 1;
      },
    decrease: (state) => {
      state.total -= 1;
    },
    increaseByValue: (state, action) => {
      state.total += action.payload;
    },
  },
});

export const { increase, decrease, increaseByValue } = counterSlice.actions;
export default counterSlice.reducer;
