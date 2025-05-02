import {createSlice} from '@reduxjs/toolkit';

interface SliceState {
  authState: {
    isLoggedIn: boolean;
    token: string;
  };
}

const initialState = {
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    setSignOut: state => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = (state: SliceState) =>
  state.authState.isLoggedIn;
export const selectToken = (state: SliceState) => state.authState.token;
export default authSlice.reducer;
