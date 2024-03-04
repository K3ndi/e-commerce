import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SharedState {
  isFormOpen: boolean;
  formUserInfo: string;
  isSearchOpen: boolean;
  searchResults: string[];
}

const initialState: SharedState = {
  isFormOpen: false,
  formUserInfo: '',
  isSearchOpen: false,
  searchResults: [],
};

export const sharedSlice = createSlice({
  name: 'SHARED',
  initialState,
  reducers: {
    toggleForm: (draftState: SharedState, action: PayloadAction<boolean>) => {
      draftState.isFormOpen = action.payload;
    },
    toggleSearch: (draftState: SharedState, action: PayloadAction<boolean>) => {
      draftState.isSearchOpen = action.payload;
    },
    setFormUserInfo: (
      draftState: SharedState,
      action: PayloadAction<string>,
    ) => {
      draftState.formUserInfo = action.payload;
    },
    setSearchResults: (
      draftState: SharedState,
      action: PayloadAction<string[]>,
    ) => {
      draftState.searchResults = action.payload;
    },
  },
});

export const { toggleForm, toggleSearch, setFormUserInfo, setSearchResults } =
  sharedSlice.actions;

export const selectFormUserInfo = (state: RootState): string =>
  state.SharedReducer.formUserInfo;

export const selectIsFormOpen = (state: RootState): boolean =>
  state.SharedReducer.isFormOpen;

export default sharedSlice.reducer;
