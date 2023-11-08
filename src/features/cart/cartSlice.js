import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'userLogged',
    updateAt: Date.now().toLocaleString(),
    items: [],
    total: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => { },
        removeItem: (state, action) => { },
    }

})
export const { } = cartSlice.actions
export default cartSlice.reducer
