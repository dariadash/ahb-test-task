import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import debounce from "debounce"

import { saveState } from "./features/app/model/browserStorage"
import { App } from "./App"
import { setupStore } from "./store"
import './ui/global.css'

const store = setupStore();

store.subscribe(
    debounce(() => {
        saveState(store.getState());
    }, 800)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app"));