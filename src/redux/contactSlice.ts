import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ContactDetails } from '../types'


export interface CounterState {
    userDetails: null | ContactDetails[]
}

const initialState: CounterState = {
    userDetails: null,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<ContactDetails>) => {
            if (state.userDetails) {
                state.userDetails = [...state.userDetails, action.payload]
            } else {
                state.userDetails = [action.payload]
            }
        },
        editContact: (state, action: PayloadAction<ContactDetails[]>) => {
            state.userDetails = action.payload
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.userDetails = state.userDetails?.filter((val) => val.index != action.payload) ?? []
        }
    },
})

export const { addContact, deleteContact, editContact } = contactSlice.actions
export default contactSlice.reducer