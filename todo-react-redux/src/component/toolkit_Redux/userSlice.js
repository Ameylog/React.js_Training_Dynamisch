import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  username: '',
  email: '',
  password: '',
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const jsonData = await response.json();
  return jsonData;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    resetForm: state => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

});

export const { setUsername, setEmail, setPassword, resetForm } = userSlice.actions;

export default userSlice.reducer;
