import { configureStore } from "@reduxjs/toolkit";

import classesReducer from "./slices/classesSlice.js"
import authReducer from "./slices/authSlice.js"
import destinationsReducer from "./slices/destinationsSlice.js"


export const store = configureStore({
    reducer: {
        classes: classesReducer,
        auth: authReducer,
        destinations: destinationsReducer,
    }
})