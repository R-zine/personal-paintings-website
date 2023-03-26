import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    onClickedStateChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClickedStateChange } = landingSlice.actions;

export default landingSlice.reducer;
