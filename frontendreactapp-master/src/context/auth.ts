import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signedIn: false,
    info: null,
  },
  reducers: {
    signIn: (_state, action) => ({ signedIn: true, info: action.payload }),
    signOut: () => ({ signedIn: false, info: null }),
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
