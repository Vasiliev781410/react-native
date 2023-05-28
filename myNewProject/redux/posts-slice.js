import { createSlice } from "@reduxjs/toolkit";
import { deletePostThunk, getPostsThunk, addPostThunk } from "./posts-thunk";

const handlePending = (state) => {
  state.posts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.posts.error = payload;
};

const initialState = {
    posts: {      
      isLoading: false,
      error: null,
    },
    items: [],
    filter: ""   
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, handlePending)
      .addCase(deletePostThunk.pending, handlePending) 
      .addCase(addPostThunk.pending, handlePending)    
      .addCase(getPostsThunk.rejected, handleRejected)
      .addCase(deletePostThunk.rejected, handleRejected)
      .addCase(addPostThunk.rejected, handleRejected)
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.posts.isLoading = false;
        state.items = payload;
      })
      .addCase(deletePostThunk.fulfilled, (state, { payload }) => {
        state.posts.isLoading = false;
      })
      .addCase(addPostThunk.fulfilled, (state, { payload }) => { 
       // console.log("addPostThunk payload ",payload);      
        state.posts.isLoading = false;
        if (state.items){
          state.items = [...state.items,payload];
        }else{
          state.items = [payload];
        }
        //console.log("addPostThunk ",state.items);
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const {setFilterAction} = postsSlice.actions;
