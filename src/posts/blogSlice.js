import { createSlice } from '@reduxjs/toolkit';
import { blogdata } from '../blogdata';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: blogdata, // Initialize with the existing blogdata
  reducers: {
    addPost(state, action) {
      state.push(action.payload); // Add the new post to the state
    },
  },
});

export const { addPost } = blogSlice.actions;
export default blogSlice.reducer;