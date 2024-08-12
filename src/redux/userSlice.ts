import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type UserLogin = {
    email: string;
    password: string
}
export interface CounterState {
    userDetails: null | UserLogin
}

const initialState: CounterState = {
    userDetails: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserLogin>) => {
            state.userDetails = action.payload
        },
        logOut: (state) => {
            state.userDetails = null
        },
    },
})

export const { logOut, login } = userSlice.actions
export default userSlice.reducer