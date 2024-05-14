import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";

console.log(apiSlice)
export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,  // 'api': (state, action) => {…}
        cart:cartSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});