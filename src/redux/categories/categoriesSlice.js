import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get(
      'https://ffxivcollect.com/api/hairstyles',
    );
    return response.data;
  },
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    temporary: [],
    loading: false,
  },
  reducers: {
    search: (state, action) => {
      console.log(action.payload);
      state.categories = state.temporary;

      state.categories = state.categories.filter((cat) => cat.name.toLowerCase()
        .includes(action.payload.toLowerCase()));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.results;
        state.temporary = payload.results;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { search } = categoriesSlice.actions;

export default categoriesSlice.reducer;
