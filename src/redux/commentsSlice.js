import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch comments data
export const getComments = createAsyncThunk(
  "comments/getComments",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://academix.runasp.net/api/Comments/GetPostComments${postId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching Comments:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to delete comment
export const deleteComment = createAsyncThunk(
  "Posts/deletePost",
  async ({ postId, commentId }, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(
        `https://academix.runasp.net/api/Comments/DeleteComment${commentId}`
      );
      dispatch(getComments(postId));
    } catch (error) {
      console.error("Error deleting comment:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to create comment
export const createComment = createAsyncThunk(
  "Posts/createComment",
  async (commentForm, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `https://academix.runasp.net/api/Comments/AddComment`,
        commentForm
      );

      dispatch(getComments(commentForm.discussionId));

      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default commentSlice.reducer;
