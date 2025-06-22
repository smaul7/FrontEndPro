import { createSlice } from "@reduxjs/toolkit"

import { getClasses } from "../thunks/classesThunk"

const classesSlice = createSlice({
    name: "classes",
    initialState: {
        items: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getClasses.pending, state => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getClasses.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getClasses.rejected, state => {
                state.error = action.payload
                state.loading = false;
            })
    }
});

export default classesSlice.reducer;