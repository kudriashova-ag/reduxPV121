import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const AllPosts = createAsyncThunk('allPosts', async () => {
    const response = await api.get('/posts');
    return response.data;
});


export const postAdd = createAsyncThunk('postAdd', async (payload, { rejectWithValue }) => {
    try {
        const response = await api.post('/posts', payload);
        return response.data;
    }
    catch (err) { 
        return rejectWithValue(err.response.data)
    }
});