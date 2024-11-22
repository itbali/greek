import { combineReducers, configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAvailablePages = 'home' | 'welcome' | 'mythology' | 'music' | 'puzzle' | 'education';
type TPagesState = {
  currentPage: TAvailablePages;
};

const initialState: TPagesState = {
  currentPage: 'welcome'
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<TAvailablePages>) => {
      state.currentPage = action.payload;
    }
  },
  selectors: {
    getCurrentPage: (state) => state.currentPage
  }
});

const rootReducer = combineReducers({
  pages: pagesSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export const { setCurrentPage } = pagesSlice.actions;
export const { getCurrentPage } = pagesSlice.selectors;
