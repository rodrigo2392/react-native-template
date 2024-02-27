import {createSlice} from '@reduxjs/toolkit';
import {TTheme} from '../../theme';

interface SliceState {
  appState: {
    theme: TTheme;
  };
}

const initialState = {
  theme: 'light',
};

const authSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = authSlice.actions;

export const selectTheme = (state: SliceState) => state.appState.theme;

export default authSlice.reducer;
