import { createSlice } from "@reduxjs/toolkit";
import { UpdateCart } from "../utils/CartUtils";
import { Navigate } from "react-router-dom";
const initialState = localStorage.getItem('animeArchiveCart') ? JSON.parse(localStorage.getItem('animeArchiveCart')) : {cartItems:[], shippingAddress:{},paymentMethod:'PayPal'}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const item = action.payload
            const existItem = state.cartItems.find(x => x._id === item._id)

            if(existItem){
                state.cartItems = state.cartItems.map(x => x._id === existItem._id ? item : x)
            }else{
                state.cartItems = [...state.cartItems, item]
            }
            return UpdateCart(state)
        },
        removeFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter((i) => i._id !== action.payload)
        
        return UpdateCart(state)

        },
        saveTheShippingAddress: (state,action) => {
            state.shippingAddress = action.payload
            return UpdateCart(state)
        },
        savePaymentMethod: (state,action) => {
            state.paymentMethod = action.payload
            return UpdateCart(state)
        },
        clearCartItems: (state) => {
            state.cartItems = []
            return UpdateCart(state)
        }
    }

})

export const {addToCart, removeFromCart, saveTheShippingAddress, savePaymentMethod, clearCartItems} = cartSlice.actions

export default cartSlice.reducer