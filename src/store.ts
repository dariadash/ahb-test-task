import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loadState } from './features/app/model/browserStorage'
import clientsReducer from './features/clients-list/model/clientsSlice'

const rootReducer = combineReducers({
    clientsReducer,
})

export const setupStore = () => {
    return configureStore({
        devTools: true,
        reducer: rootReducer,
        preloadedState: loadState(),
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']