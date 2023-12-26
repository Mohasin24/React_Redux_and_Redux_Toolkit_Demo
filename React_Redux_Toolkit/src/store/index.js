import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/Counter";

const counterStore = configureStore({
  reducer : {
    counter : counterSlice.reducer
  }
});

export default counterStore;
