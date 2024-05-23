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
        logout: (state,action) => {
            state.userInfo = null
            localStorage.removeItem('AnimeArchiveUserInfo')
        }
    }
})

export default authSlice.reducer

export const {setCredentials, logout} = authSlice.actions