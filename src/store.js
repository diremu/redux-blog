import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import blogReducer from './posts/blogSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
  },
});

export default store;