import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFiles = createAsyncThunk('files/fetchFiles', async (fileName) => {
  const queryParam = fileName ? `?fileName=${fileName}` : '';
  const response = await fetch(`http://localhost:4522/files/data${queryParam}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default filesSlice.reducer;
