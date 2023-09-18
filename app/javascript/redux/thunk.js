import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
const url = '/api/greetings/random';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-undef
    return thunkAPI.rejectWithValue({ error: e.message });
  }
});

export default fetchGreeting;
