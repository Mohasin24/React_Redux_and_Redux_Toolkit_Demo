import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {counterVal : 0},
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },

    decrement: (state) => {
      state.counterVal--;
    },

    reset: (state) => {
      state.counterVal = 0;
    },

    addition: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },

    substraction: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;