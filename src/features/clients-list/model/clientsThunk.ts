import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from '@/features/types/Client';
import * as jsonData from '@/mock/clients.json'

export const fetchClients = createAsyncThunk<Client[], void, { rejectValue: unknown }>(
    'content/fetchContent',
    async () => {
        try {
            return new Promise((resolve) => {
                setTimeout(() => resolve(jsonData), 1000);
            });
        } catch (error) {
            throw error;
        }
    }
)
