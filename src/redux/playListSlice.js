import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch PlayList data
export const getPlayList = createAsyncThunk(
  "PlayList/getPlayList",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://academix.runasp.net/api/Courses/GetCoursePlaylist${courseId}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching lectures:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to create PlayList
export const createPlayList = createAsyncThunk(
  "playList/createPlayList",
  async (playListForm, { rejectWithValue, dispatch }) => {
    console.log(playListForm);
    try {
      await axios.put(
        `https://academix.runasp.net/api/Courses/AddPlayList`,
        playListForm
      );
      dispatch(getPlayList(playListForm.courseId));
    } catch (error) {
      console.error("Error creating PlayList:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const playListSlice = createSlice({
  name: "playList",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default playListSlice.reducer;
