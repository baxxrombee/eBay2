import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:  JSON.parse(localStorage.getItem("data")) || null,
    token: localStorage.getItem("token") || null,
    likes: JSON.parse(localStorage.getItem('likes')) || [],
    stored: JSON.parse(localStorage.getItem('stored')) || [],
    user: localStorage.getItem("user") || null

    
}

const authSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        register: (state, action) => {
            state.data = action.payload
            localStorage.setItem("data", JSON.stringify(action.payload))
         },
         login: (state, action) => {
            state.token = action.payload.access_token;
            localStorage.setItem("token", action.payload.access_token)
            if(state.token){
            window.location.replace("/admin")
            }
        },
        getUserProfile: (state, action) => {
            const {password, ...user} = action.payload
            state.user = user
            localStorage.setItem("user", JSON.stringify(user))
          }
    }
})

export const { register, login, getUserProfile} = authSlice.actions
const actionsReducer = authSlice.reducer

export default actionsReducer 