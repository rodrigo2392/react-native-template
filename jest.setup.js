import {jest} from '@jest/globals';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('@react-native-vector-icons/material-icons', () => 'Icon');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(() => ({mutate: jest.fn()})),
}));

jest.mock('react-native-splash-screen', () => {
  return {
    hide: () => {},
  };
});

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    interceptors: {
      request: {use: jest.fn()},
      response: {use: jest.fn()},
    },
  })),
}));
