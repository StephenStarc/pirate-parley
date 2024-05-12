import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('animeArchiveCart') ? JSON.parse(localStorage.getItem('animeArchiveCart')) : {cartItems:[]}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{}
})

export default cartSlice.reducer