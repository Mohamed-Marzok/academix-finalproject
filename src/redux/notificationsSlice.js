import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to getNotifications  data
export const getNotifications = createAsyncThunk(
  "Notifications /getNotifications ",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://academix.runasp.net/api/Notifications/${userId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching lectures:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default notificationsSlice.reducer;
