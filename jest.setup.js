import {jest} from '@jest/globals';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {NativeModules} from 'react-native';
import 'react-native-gesture-handler/jestSetup';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

/*jest.mock('react-native-image-picker', () => {
  return {
    launchImageLibrary: () => {
      return {assets: [{}]};
    },
  };
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: () => {},
  };
});

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);



jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-fs', () => {
  return {};
});

jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
}));
*/

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    interceptors: {
      request: {use: jest.fn()},
      response: {use: jest.fn()},
    },
  })),
}));
