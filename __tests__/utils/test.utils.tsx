import React from 'react';
import {
  renderHook as rtlRenderHook,
  render as rtlRender,
} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import AppReducer from '../../src/redux/slices/app.slice';
import AuthReducer from '../../src/redux/slices/auth.slice';

const reducers = combineReducers({
  authState: AuthReducer,
  appState: AppReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const render = (ui: any, {actionToDispatch, ...renderOptions}: any) => {
  const Wrapper = ({children}: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  if (actionToDispatch) {
    store.dispatch(actionToDispatch);
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

const renderHook = (hook: any, renderOptions = {}) => {
  const Wrapper = ({children}: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRenderHook(hook, {wrapper: Wrapper, ...renderOptions});
};

export * from '@testing-library/react-native';

export {render, renderHook, store as testStore};
