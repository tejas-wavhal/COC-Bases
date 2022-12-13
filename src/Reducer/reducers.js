import { createReducer } from "@reduxjs/toolkit"

let initiaState = {
    fetchData: [],
    selectTownhall: [],
}

let customReducer = createReducer(initiaState, {
    LOAD_DATA: (state, action) => {
        state.fetchData = action.payload
    },
    LOAD_TH_10: (state, action) => {
        state.selectTownhall = action.payload
    },
    LOAD_TH_11: (state, action) => {
        state.selectTownhall = action.payload
    },
    LOAD_TH_12: (state, action) => {
        state.selectTownhall = action.payload
    },
    LOAD_TH_13: (state, action) => {
        state.selectTownhall = action.payload
    },
    LOAD_TH_14: (state, action) => {
        state.selectTownhall = action.payload
    },
    LOAD_TH_15: (state, action) => {
        state.selectTownhall = action.payload
    },
})

export default customReducer