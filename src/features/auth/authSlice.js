import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    imageCamera:null,
    localId:null,

}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                user: action.payload.data.email,
                token: action.payload.data.idToken,
                localId:action.payload.data.localId,
            }
        },
        clearUser: (state, action) => {
            return {
                user: null, token: null
            }
        },
        setCameraImage: (state, action) => {
            return {
                ...state,
                imageCamera: action.payload
            }
        }
    }
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer 