import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

export const getPostsThunk = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await getDocs(collection(db, 'posts'));
      console.log('snapshot ',snapshot);

       return snapshot;
    } catch {
      return rejectWithValue();
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      //const data = await deletePost(id);
      const data = {};
      return data;    
    } catch {
      return rejectWithValue();
    }
  }
);

export const addPostThunk = createAsyncThunk(
  "posts/addPost",
  async (post, { rejectWithValue, dispatch }) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), post);
      console.log('Document written with ID: ', docRef.id);
 
      return post;    
    } catch {
      return rejectWithValue();
    }
  }
);


