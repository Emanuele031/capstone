
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Mission {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  badge?: string;
}

export interface ProgressState {
  score: number;
  level: number;
  missions: Mission[];
  badges: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProgressState = {
  score: 0,
  level: 1,
  missions: [],
  badges: [],
  status: 'idle',
  error: null,
};


export const fetchFullProgress = createAsyncThunk<
  ProgressState,
  number,
  { rejectValue: string }
>(
  'progress/fetchFullProgress',
  async (userId, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    const response = await fetch(`http://localhost:8080/api/progress/full/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message || 'Failed to fetch full progress');
    }
    return response.json();
  }
);


export const completeMission = createAsyncThunk<
  ProgressState,
  { userId: number; missionId: number },
  { rejectValue: string }
>(
  'progress/completeMission',
  async ({ userId, missionId }, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    const response = await fetch(`http://localhost:8080/api/progress/${userId}/complete/${missionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message || 'Failed to complete mission');
    }
    return response.json();
  }
);

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullProgress.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchFullProgress.fulfilled, (state, action: PayloadAction<ProgressState>) => {
        state.score = action.payload.score;
        state.level = action.payload.level;
        state.missions = action.payload.missions;
        state.badges = action.payload.badges;
        state.status = 'succeeded';
      })
      .addCase(fetchFullProgress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Failed to fetch progress';
      })
      .addCase(completeMission.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(completeMission.fulfilled, (state, action: PayloadAction<ProgressState>) => {
        
        state.score = action.payload.score;
        state.level = action.payload.level;
        state.missions = action.payload.missions;
        state.badges = action.payload.badges;
        state.status = 'succeeded';
      })
      .addCase(completeMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message || 'Failed to complete mission';
      });
  },
});

export default progressSlice.reducer;

