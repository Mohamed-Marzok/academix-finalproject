import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch QuestionBank data
export const getQuestionBank = createAsyncThunk(
  "QuestionBank/getQuestionBank",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://academix.runasp.net/api/Questions/QuestionsBank${courseId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching lectures:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const questionBankSlice = createSlice({
  name: "questionBank",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionBank.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getQuestionBank.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getQuestionBank.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default questionBankSlice.reducer;
