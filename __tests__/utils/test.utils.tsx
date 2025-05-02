import React, { PropsWithChildren } from 'react';
import {
  RenderOptions,
  render as rtlRender,
} from '@testing-library/react-native';
import store from '../../src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';


const render = (ui: React.ReactElement, { actionToDispatch, ...renderOptions }: RenderOptions & {
  actionToDispatch?: {
    payload: any;
    type: string
  }
}, navigation = true) => {

  let Wrapper;

  if (navigation) {
    Wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={store}>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </Provider>
    );
  } else {
    Wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={store}>
          {children}
      </Provider>
    );
  }


  if (actionToDispatch) {
    store.dispatch(actionToDispatch);
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react-native';

export { render, store as testStore };


