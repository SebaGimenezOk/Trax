import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import products from "../../data/products";


const initialState = {
    categories: dataCategories,
    products: products,
    productsFilteredByCategory: [],
    categorySelected: null,
    productIdSelected: null,
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
        },
        setProductSelected: (state, action) => {
            state.productIdSelected = action.payload
        },
    },
})

export const { setCategorySelected, setProductSelected } = shopSlice.actions
export default shopSlice.reducer