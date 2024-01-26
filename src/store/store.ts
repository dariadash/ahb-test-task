import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from '../lib/browserStorage'
import clientsReducer from '../features/clients-list/model/clientsSlice'
import clientFilterReducer from '../features/client-filter/model/clientFilterSlice'
import debounce from 'debounce'
import { STORE_AUTOSAVE_MS } from './const'

const rootReducer = combineReducers({
    clientsReducer,
    clientFilterReducer
})

export const setupStore = () => {
    const store = configureStore({
        devTools: true,
        reducer: rootReducer,
        preloadedState: loadState(),
    })
    store.subscribe(
        debounce(() => {
            saveState(store.getState());
        }, STORE_AUTOSAVE_MS)
    );
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']