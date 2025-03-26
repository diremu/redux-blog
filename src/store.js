import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import blogReducer from './posts/blogSlice'; // Import the blog reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer, // Add the blog reducer
  },
});

export default store;