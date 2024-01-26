import { createAsyncThunk } from '@reduxjs/toolkit'
import { Client } from '@/interfaces/types'

export const fetchClients = createAsyncThunk<Client[], void, { rejectValue: unknown }>(
    'content/fetchContent',
    async () => {
        try {
            const response = await fetch('/clients.json')
            return response.json()
        } catch (error) {
            throw error
        }
    }
)
