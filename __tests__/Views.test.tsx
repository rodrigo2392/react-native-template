import {it, afterEach, expect} from '@jest/globals';
import 'react-native';
import React from 'react';
import {cleanup, fireEvent, render, waitFor} from './utils/test.utils';
import HomeScreen from '../src/views/app/Home';
import AboutScreen from '../src/views/app/About';
import SettingScreen from '../src/views/app/Settings';
import LoginScreen from '../src/views/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {setTheme} from '../src/redux/slices/app.slice';

const mockDispatch = jest.fn();

const mockedNavigate = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate,
    }),
  };
});

afterEach(() => {
  cleanup();
});

describe('Renders Home Screen correctly', () => {
  it('Renders Home Screen correctly', async () => {
    let component;
    await waitFor(() => {
      component = render(<HomeScreen />, {});
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Click logout button functionality', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>,
        {},
      );
    });
    fireEvent.press(await component.findByTestId('logoutButton'));
    expect(mockDispatch).toBeCalled();
  });
});

describe('Renders About Screen correctly', () => {
  it('Renders About Screen correctly', async () => {
    let component;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <AboutScreen />
        </NavigationContainer>,
        {},
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Call button to navigate', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <AboutScreen />
        </NavigationContainer>,
        {},
      );
    });
    fireEvent.press(component.getByTestId('goToSettingsButton'));
    expect(mockedNavigate).toBeCalled();
  });
});

describe('Renders Settings Screen correctly', () => {
  it('Renders Settings Screen correctly', async () => {
    let component;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {},
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Check light theme exists', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {
          actionToDispatch: setTheme('dark'),
        },
      );
    });
    const darkButton = await component.findByTestId('lightText');
    expect(darkButton).toBeTruthy();
  });

  it('Check dark theme exists', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {
          actionToDispatch: setTheme('light'),
        },
      );
    });
    const darkButton = await component.findByTestId('darkText');
    expect(darkButton).toBeTruthy();
  });

  it('click button to change theme to dark', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {
          actionToDispatch: setTheme('light'),
        },
      );
    });
    fireEvent.press(await component.findByTestId('themeButton'));
    expect(mockDispatch).toBeCalled();
  });

  it('click button to change theme to light', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {
          actionToDispatch: setTheme('dark'),
        },
      );
    });
    fireEvent.press(await component.findByTestId('themeButton'));
    expect(mockDispatch).toBeCalled();
  });

  it('Go back', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <SettingScreen />
        </NavigationContainer>,
        {},
      );
    });
    fireEvent.press(component.getByText('Atrás'));
    expect(mockedNavigate).toBeCalled();
  });
});

describe('Login screen', () => {
  it('Renders Login Screen correctly', async () => {
    let component;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>,
        {},
      );
    });

    expect(component!.toJSON()).toMatchSnapshot();
  });

  it('Login on click button', async () => {
    let component: any;
    await waitFor(() => {
      component = render(
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>,
        {},
      );
    });
    expect(component.getByTestId('loginButton')).toBeTruthy();
    fireEvent.press(component.getByText('Presiona para entrar'));
    expect(mockDispatch).toBeCalled();
  });
});
