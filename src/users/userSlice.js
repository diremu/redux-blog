import { createSlice } from '@reduxjs/toolkit';
import {blogdata} from '../blogdata';

const initialState = {
    user: 'Guest',// i'll make this to be the same as guest
    isVerified: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            const {username, password} = action.payload
            const user = blogdata.find(user => (user.name === username) && (user.password === password) )
            if(user){
                state.user = user.name
                state.isVerified = true
                state.body = user.body
                state.title = user.title
            } else {
                state.user = "Guest"
                state.isVerified = false
                alert("Invalid username or password")
            }
        },
        logout(state) {
            state.user = null
            state.isVerified = false
        }
    }
})

export default userSlice.reducer
export const {login, logout} = userSlice.actions