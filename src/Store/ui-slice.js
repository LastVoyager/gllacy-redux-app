import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice ({
  name:'ui',
  initialState: { modalShown: false},
  reducers: {
    toggle (state) {
      state.modalShown = !state.modalShown;
    },
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;