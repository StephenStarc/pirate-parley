import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: localStorage.getItem('AnimeArchiveUserInfo') ? JSON.parse(localStorage.getItem('AnimeArchiveUserInfo')) : null
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state,action) => {
            state.userInfo = action.payload
            localStorage.setItem('AnimeArchiveUserInfo', JSON.stringify(action.payload))
        },

    }
})

export default authSlice.reducer

export const {setCredentials} = authSlice.actions