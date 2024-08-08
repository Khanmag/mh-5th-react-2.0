import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    // increment(state, actions) { // actions = {type: ..., payload: 45}
    increment(state, { payload: num }) {
      // increment(45)  payload = 45
      if (state.count + num > 2024) state.count = 2024;
      else state.count = state.count + num;
    },
    decrement(state, { payload: num }) {
      state.count = state.count - num;
    },
  },
});

export const { increment, decrement } = firstSlice.actions;
export default firstSlice.reducer;
