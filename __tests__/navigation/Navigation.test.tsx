import {it, afterEach, expect} from '@jest/globals';
import {jest} from '@jest/globals';
import 'react-native';
import React from 'react';
import {cleanup, render} from '../utils/test.utils';
import AuthNavigation from '../../src/navigation/Auth';
import AppNavigation from '../../src/navigation/App';
import Navigation from '../../src/navigation';
import {setSignIn} from '../../src/redux/slices/auth.slice';

jest.useFakeTimers();

afterEach(() => {
  cleanup();
});

it('Renders Navigation correctly', () => {
  const component = render(<Navigation />, {}, false);

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders Navigation with token correctly', async () => {
    const component = render(<Navigation />, {actionToDispatch: setSignIn({token: '123'})}, false);
    expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders Auth Navigation correctly', async () => {
    const component = render(<AuthNavigation />, {}, false);

  expect(component!.toJSON()).toMatchSnapshot();
});

it('Renders App Navigation correctly', async () => {
    const component = render(<AppNavigation />, {}, false);

  expect(component!.toJSON()).toMatchSnapshot();
});
