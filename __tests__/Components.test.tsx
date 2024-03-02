import {it, afterEach, expect} from '@jest/globals';
import 'react-native';
import React from 'react';
import {cleanup, render, waitFor, fireEvent} from './utils/test.utils';
import Button from '../src/components/Button';
import Container from '../src/components/Container';

afterEach(() => {
  cleanup();
});

const onPress = jest.fn();

describe('Renders Container correctly', () => {
  it('Renders Container correctly without scroll', async () => {
    let component;
    const props = {
      children: <></>,
      os: 'android',
    };
    await waitFor(() => {
      component = render(<Container {...props} />, {});
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Renders Container correctly with scroll and ios', async () => {
    let component;
    const props = {
      children: <></>,
      scroll: true,
      os: 'ios',
    };
    await waitFor(() => {
      component = render(<Container {...props} />, {});
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });
});

describe('Button functionality', () => {
  it('Renders Button correctly', async () => {
    let component;
    const props = {
      onPress: () => {},
      children: <></>,
    };
    await waitFor(() => {
      component = render(<Button {...props} />, {});
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Fire onpress event correctly', async () => {
    let component: any;
    const props = {
      testId: 'testButton',
      onPress: onPress,
      children: 'testButton',
    };
    await waitFor(() => {
      component = render(<Button {...props} />, {});
    });
    fireEvent.press(component.getByText('testButton'));
    expect(onPress).toBeCalled();
  });
});
