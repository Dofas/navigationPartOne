import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavouritesState = {
  favouriteIds: string[];
};

const initialState: FavouritesState = {
  favouriteIds: []
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.favouriteIds.push(action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.favouriteIds.splice(
        state.favouriteIds.indexOf(action.payload.id),
        1
      );
    }
  }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
