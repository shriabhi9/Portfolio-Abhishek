import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light-mode",
  },
  reducers: {
    lightmode: (state) => {
      state.value = "dark-mode";
    },
    darkMode: (state) => {
      state.value = "light-mode";
    },
  },
});

export const { lightmode,darkMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
