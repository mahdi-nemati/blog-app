import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// initaial state
const initialState = {
  blog: [],
  error: null,
  loading: false,
};
//get async blog function
export const getBlog = createAsyncThunk(
  "contact/getBlog",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://api.freerealapi.com/blogs");
      return data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
export const getOneBlog = createAsyncThunk(
  "contact/getOneBlog",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.freerealapi.com/blogs/${payload}`
      );
      return data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

const BlogSlice = createSlice({
  name: "Blog",
  initialState,
  extraReducers: {
    // get all blog
    [getBlog.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, blog: action.payload };
    },
    [getBlog.pending]: (state, action) => {
      return { ...state, error: null, loading: true, blog: [] };
    },
    [getBlog.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, blog: [] };
    },
    // get one blog
    [getOneBlog.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, blog: action.payload };
    },
    [getOneBlog.pending]: (state, action) => {
      return { ...state, error: null, loading: true, blog: [] };
    },
    [getOneBlog.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, blog: [] };
    },
  },
});
export default BlogSlice.reducer;
