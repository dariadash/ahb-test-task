import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import debounce from "debounce"

import { saveState } from "./lib/browserStorage"
import { App } from "./App"
import { setupStore } from "./store/store"
import './ui/global.css'

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app"));