import {it, afterEach, expect} from '@jest/globals';
import {jest} from '@jest/globals';
import 'react-native';
import React from 'react';
import {act, cleanup, render, waitFor} from './utils/test.utils';
import AuthNavigation from '../src/navigation/Auth';
import AppNavigation from '../src/navigation/App';
import Navigation from '../src/navigation';
import {setSignIn} from '../src/redux/slices/auth.slice';

jest.useFakeTimers();

afterEach(() => {
  cleanup();
});

it('Renders Navigation correctly', async () => {
  let component;
  await act(
    async () =>
      await waitFor(() => {
        component = render(<Navigation />, {});
      }),
  );

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders Navigation with token correctly', async () => {
  let component;
  await act(
    async () =>
      await waitFor(() => {
        component = render(<Navigation />, {
          actionToDispatch: setSignIn({token: '123'}),
        });
      }),
  );

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders Auth Navigation correctly', async () => {
  let component;
  await act(
    async () =>
      await waitFor(() => {
        component = render(<AuthNavigation />, {});
      }),
  );

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders App Navigation with Home path correctly', async () => {
  let component;
  await act(
    async () =>
      await waitFor(() => {
        component = render(<AppNavigation />, {});
      }),
  );

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders App Navigation with About path correctly', async () => {
  let component;
  await act(
    async () =>
      await waitFor(() => {
        component = render(<AppNavigation initialRoute="About" />, {});
      }),
  );

  expect(component!.toJSON()).toMatchSnapshot();
});
