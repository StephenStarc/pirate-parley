import { USERS_URL } from "../constants";
import {apiSlice} from './apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`, //using {} because we want to return an object, not an array.
            method:'POST',
            body: data
            }),
        }),
        register:builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`, //using {} because we want to return an object, not an array.
            method:'POST',
            body:data,
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`, //using {} because we want to return an object, not an array.
            method:'POST',
            }),
        }),
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation} = usersApiSlice