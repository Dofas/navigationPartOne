import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "store/redux/favourite";

export const store = configureStore({
  reducer: {
    favoriteMeals: favouriteReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
