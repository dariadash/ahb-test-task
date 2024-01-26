import { createSlice } from '@reduxjs/toolkit'
import { Client } from '@/interfaces/types'

interface ClientFilterSlice {
    search: string,
    filterStatus: Client['status'] | null
}

const initialState: ClientFilterSlice = {
    search: '',
    filterStatus: null
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setFilter: (state, action) => {
            state.filterStatus = action.payload
        }
    },
})

export const {
    setFilter,
    setSearch
} = clientsSlice.actions

export default clientsSlice.reducer