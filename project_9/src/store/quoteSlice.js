import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  report:[],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setFavorite(state, actions) {
      const quote = actions.payload;
      const favorites_id = state.favorites.map((item)=>item._id)
     if(!favorites_id.includes(quote._id))
     {
      state.favorites.push(quote);
     }
      return state;
    },
    setReport(state, actions) {
      const reports = actions.payload;
      state.report.push(reports);
      return state;
    },

    clearFavorites(state, actions) {
      return initialState;
    },
  },
});
