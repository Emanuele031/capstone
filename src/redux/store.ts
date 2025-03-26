import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import collectionPointsReducer from './collectionPointsSlice';
import habitsReducer from './habitsSlice';
import progressReducer from './progressSlice';
import rankingReducer from './rankingSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  collectionPoints: collectionPointsReducer,
  habits: habitsReducer,
  progress: progressReducer,
  ranking: rankingReducer
});


const loadState = (): Partial<ReturnType<typeof rootReducer>> | undefined => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Errore nel caricamento dello state', e);
    return undefined;
  }
};


const saveState = (state: Partial<ReturnType<typeof rootReducer>>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (e) {
    console.warn('Errore nel salvataggio dello state', e);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    })
});


store.subscribe(() => {
  const state = store.getState();
  
  saveState({
    progress: state.progress,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

