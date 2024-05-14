import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('animeArchiveCart') ? JSON.parse(localStorage.getItem('animeArchiveCart')) : {cartItems:[]}

const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

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

            //Calculate item Price
           const itemPrice = addDecimal(state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0))
            
            //Calculate shipping Price (If order is over $100 then free, else $10 shoping)
            const shippingPrice = addDecimal(itemPrice > 100 ? 0 : 10)

            //Calculate tax Price
            const taxPrice = addDecimal(Number((0.15 * itemPrice).toFixed(2)))

            //Calculate total Price
            const totalPrice = (Number(itemPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)
        
            //Refering the Values
            state.itemPrice = itemPrice
            state.shippingPrice = shippingPrice
            state.taxPrice = taxPrice
            state.totalPrice = totalPrice

        localStorage.setItem('animeArchiveCart', JSON.stringify(state))
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer