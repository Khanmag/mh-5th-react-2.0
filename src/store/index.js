import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./firstSlice";
import todosSlice from "./todosSlice";

export const store = configureStore({
  reducer: {
    firstSlice,
    todosSlice
  },
});
