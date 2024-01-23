import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as jsonData from '@/mock/clients.json'

interface CounterState {
    items: {
        id: number,
        fullname: string,
        created_at: string,
        phone: string,
        region: string,
        status: string
    }[]
}

const initialState: CounterState = {
    items: jsonData,
}

export const counterSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
    },
})

export default counterSlice.reducer