import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "./landing";
import cartReducer from "./cart";
import { apiSlice } from "./query";

export const store = configureStore({
  reducer: {
    landing: landingReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
