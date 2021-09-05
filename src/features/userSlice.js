import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: 'Rohit Sharma',
    blogData: null
  },
  reducers: {
    setSignedIn: (state, action) => {
      console.log('1');
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      console.log('2');
      state.userData = action.payload;
    },
    setInput: (state, action) => {
      console.log('3');
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      console.log('4');
      state.blogData = action.payload;
    }
  }
});

export const { setSignedIn, setUserData, setInput, setBlogData } =
  userSlice.actions;

export const selectSignedIn = state => state.user.isSignedIn;
export const selectUserData = state => state.user.userData;
export const selectUserInput = state => state.user.searchInput;
export const selectBlogData = state => state.user.blogData;

export default userSlice.reducer;
