import { combineReducers, configureStore } from '@reduxjs/toolkit'
import clientsReducer from './features/clients-list/model/clientsSlice'

const rootReducer = combineReducers({
    clientsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']