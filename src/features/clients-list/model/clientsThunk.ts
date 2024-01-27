import { createAsyncThunk } from '@reduxjs/toolkit'
import { Client } from '@/interfaces/types'
import { loadState, saveState } from '@/lib/browserStorage'

export const fetchClients = createAsyncThunk<Client[], void>(
    'content/fetchContent',
    async () => {
        const fetchedUsers = await fetch('/clients.json')
            .then((v) => v.json())
        return [...fetchedUsers, ...loadState()]
    }
)


export const saveClients = createAsyncThunk<void, Client[]>(
    'content/saveClients',
    (clients) => {
        saveState(clients)
    }
)