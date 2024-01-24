import { createSlice } from '@reduxjs/toolkit'
import { Client } from '@/features/types/Client'
import { fetchClients } from './clientsThunk';

interface AppState {
    clients: Client[],
    loading: boolean,
    error: string | undefined,
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
            const newDate = new Date().toDateString()
            const newItem = {
                id: state.clients.length,
                fullname: action.payload.fullname,
                phone: action.payload.phone,
                region: action.payload.region,
                status: action.payload.status,
                created_at: newDate,
            };
            state.clients.push(newItem);
        },
        editItem: (state, action) => {
            const { id, updatedData } = action.payload
            console.log(updatedData);

            const itemIndex = state.clients.findIndex((item) => item.id === id)
            if (itemIndex !== -1) {
                state.clients[itemIndex] = {
                    ...state.clients[itemIndex],
                    ...updatedData
                };
                // You might want to update the JSON file here as well
            }
        },
        deleteItem: (state, action) => {
            const itemIdToDelete = action.payload;
            state.clients = state.clients.filter(item => item.id !== itemIdToDelete);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClients.pending, (state) => {
            console.log('loading');

            state.loading = true
        })
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.loading = false
            state.clients = action.payload
            console.log(action.payload);
            console.log(state.clients);
        })
        builder.addCase(fetchClients.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
})

export const { createItem, deleteItem, editItem } = clientsSlice.actions;

export default clientsSlice.reducer