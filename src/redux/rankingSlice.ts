import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';


export interface RankingUser {
  id: number;
  username: string;
  score: number;
}

interface RankingState {
  ranking: RankingUser[];
  loading: boolean;
  error: string | null;
}

const initialState: RankingState = {
  ranking: [],
  loading: false,
  error: null
};

export const fetchRanking = createAsyncThunk(
  'ranking/fetchRanking',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    console.log("Token in fetchRanking:", token);
    
    const response = await fetch("http://localhost:8080/api/ranking", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore nella richiesta: ${errorText}`);
    }
  
    return response.json();
  }
);


const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRanking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRanking.fulfilled, (state, action) => {
        state.loading = false;
        state.ranking = action.payload;
      })
      .addCase(fetchRanking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Errore nel caricamento del ranking";
      });
  }
});

export default rankingSlice.reducer;
