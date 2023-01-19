// root akan memberitahu jika ada perubahan dalam redux akan storing ke dalamm app.js
import { combineReducers, createStore } from 'redux'

import ThisIsReducer from "./../Reducer/ThisIsReducer"

const rootReducer = combineReducers({
    ThisIsReducer,
})

const store = createStore(rootReducer);

export default store;