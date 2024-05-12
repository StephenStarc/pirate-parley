import { PRODUCT_URL } from "../constants";
import {apiSlice} from './apiSlice'

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCT_URL  //using {} because we it return a object
            }),
            keepUnusedDataFor: 5
        }),
        getProductsDetails: builder.query({
            query: (params) => ({
                url: PRODUCT_URL + '/' + params  //using {} because we it return a object
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const {useGetProductsQuery} = productApiSlice
export const {useGetProductsDetailsQuery} = productApiSlice