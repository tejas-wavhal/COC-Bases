import { configureStore } from "@reduxjs/toolkit";
import customReducer from '../Reducer/reducers'

const store = configureStore({
    reducer: {
        custom: customReducer
    }
})

export default store