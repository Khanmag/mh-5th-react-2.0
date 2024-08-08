import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./firstSlice";

export const store = configureStore({
  reducer: {
    firstSlice,
  },
});
