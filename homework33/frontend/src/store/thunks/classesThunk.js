import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:4000";

export const getClasses = createAsyncThunk(
    "classes/getClasses",
    async ({ destinationId, query }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/search`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({destinationId, query})
            })

            if(!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Failed to fetch classes!")
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)