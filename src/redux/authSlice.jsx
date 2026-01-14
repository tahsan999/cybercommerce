import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authinfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { authinfo } = authSlice.actions;
export default authSlice.reducer;
