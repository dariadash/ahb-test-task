import { combineReducers, configureStore } from '@reduxjs/toolkit'
import clientsReducer from '../features/clients-list/model/clientsSlice'
import clientFilterReducer from '../features/client-filter/model/clientFilterSlice'

const rootReducer = combineReducers({
    clientsReducer,
    clientFilterReducer
})

export const setupStore = () => {
    return configureStore({
        devTools: true,
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']