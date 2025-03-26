import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface CollectionPoint {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  category: string;
}

export const fetchCollectionPoints = createAsyncThunk<
  CollectionPoint[],
  void,
  { rejectValue: string }
>(
  'collectionPoints/fetch',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    console.log("Token salvato:", token); 
    try {
      const response = await fetch('http://localhost:8080/api/collection-points', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        
        const errorMessage = await response.text();
        return thunkAPI.rejectWithValue(errorMessage);
      }
      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const collectionPointsSlice = createSlice({
  name: 'collectionPoints',
  initialState: [] as CollectionPoint[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollectionPoints.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchCollectionPoints.rejected, (state, action) => {
      
      console.error('Fetch collection points rejected:', action.payload);
    });
  }
});

export default collectionPointsSlice.reducer;
