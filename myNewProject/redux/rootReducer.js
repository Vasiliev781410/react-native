import { combineReducers } from "redux";
import {usersReducer}  from "./users-slice";
import { postsReducer } from "./posts-slice";

export const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
  });