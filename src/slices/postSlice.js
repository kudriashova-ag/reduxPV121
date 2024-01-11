import { createSlice } from "@reduxjs/toolkit"
import { AllPosts, postAdd } from "../asyncThunks/postThunk";

const initialState = {
    posts: [],
    loading: false,
    error: null
}


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(AllPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(AllPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Error!!!';
            })


            .addCase(postAdd.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postAdd.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload)
            })
            .addCase(postAdd.rejected, (state, action) => {
                state.loading = false;
                state.error = Object.keys(action.payload.errors).join(', ');
            })
    }
});

export default postSlice.reducer;