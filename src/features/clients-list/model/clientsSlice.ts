import { createSlice } from '@reduxjs/toolkit'
import { Client } from '@/interfaces/types'
import { fetchClients } from './clientsThunk'

interface AppState {
    clients: Client[],
    loading: boolean,
    error?: string,
}

const initialState: AppState = {
    clients: [],
    loading: false,
    error: '',
}

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        createItem: (state, action) => {
            const newItem = {
                id: state.clients.length,
                fullname: action.payload.fullname,
                phone: action.payload.phone,
                region: action.payload.region,
                status: action.payload.status,
                created_at: new Date().toDateString(),
            };
            state.clients.push(newItem)
        },
        dragAndDropItem: (state, action) => {
            const { fromIndex, toIndex } = action.payload
            const updatedItems = [...state.clients]
            const [movedItem] = updatedItems.splice(fromIndex, 1)
            updatedItems.splice(toIndex, 0, movedItem)
            state.clients = updatedItems
        },
        editItem: (state, action) => {
            const { id, updatedData } = action.payload
            const itemIndex = state.clients.findIndex((item) => item.id === id)
            if (itemIndex !== -1) {
                state.clients[itemIndex] = {
                    ...state.clients[itemIndex],
                    ...updatedData
                }
            }
        },
        deleteItem: (state, action) => {
            const itemIdToDelete = action.payload;
            state.clients = state.clients.filter(item => item.id !== itemIdToDelete)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClients.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.loading = false
            state.clients = action.payload
        })
        builder.addCase(fetchClients.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
})

export const {
    createItem,
    deleteItem,
    editItem,
    dragAndDropItem,
} = clientsSlice.actions

export default clientsSlice.reducer