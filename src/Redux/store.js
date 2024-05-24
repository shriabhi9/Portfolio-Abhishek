import { configureStore } from "@reduxjs/toolkit";
import { lightmode,darkMode } from "./Slice/ThemeSlice";

export const store = configureStore({
    reducer: {
        light:lightmode,
        dark:darkMode,
    },
  })