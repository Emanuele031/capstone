import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store'; 

interface Habit {
  id: number;
  text: string;
  type: string;
  impactScore: number;
}

interface HabitState {
  habits: Habit[];
  recommendations: string[];
  loading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  recommendations: [],
  loading: false,
  error: null
};


export const addHabit = createAsyncThunk(
  'habits/addHabit',
  async (habitData: { text: string; type: string }, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    
    if (!token) {
      throw new Error("Token mancante. L'utente non è autenticato.");
    }
    
    console.log("Token inviato:", token);
    
    const response = await fetch(`http://localhost:8080/api/habits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(habitData)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore durante la creazione dell’abitudine: ${errorText}`);
    }
    
    return response.json();
  }
);



export const fetchRecommendations = createAsyncThunk(
  'habits/fetchRecommendations',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    const response = await fetch(`http://localhost:8080/api/habits/recommendations`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore nel recupero delle raccomandazioni: ${errorText}`);
    }

    return response.json();
  }
);


const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addHabit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addHabit.fulfilled, (state, action) => {
        state.loading = false;
        state.habits.push(action.payload);
      })
      .addCase(addHabit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Errore imprevisto';
      })

      .addCase(fetchRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Errore nel caricamento raccomandazioni';
      });
  }
});

export default habitsSlice.reducer;
