import { createSlice } from "@reduxjs/toolkit"

import { getDestinations } from "../thunks/destinationsThunk.js"

const destinationsSlice = createSlice({
    name: "destinations",
    initialState: {
        items: [],
        loading: false,
        error: "",
    },
    reducers: {}
});

export default destinationsSlice.reducer;