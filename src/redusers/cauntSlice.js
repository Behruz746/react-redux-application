import { createSlice } from "@reduxjs/toolkit";

export const countSlise = createSlice({
  name: "count", // redux slice nomi
  initialState: { count: 0 }, // malumoti
  reducers: {
    plusCounter: (state) => {
      state.count += 1;
    },
    minusCounter: (state) => {
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  }, // functionlari
});

export const { plusCounter, minusCounter, resetCounter } = countSlise.actions; // countSlise.actions functionslari
export default countSlise.reducer;
