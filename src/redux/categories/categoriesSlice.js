import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get(
      `https://ffxivcollect.com/api/hairstyles`
    );
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.results;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
