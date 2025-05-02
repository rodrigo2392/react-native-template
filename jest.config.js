module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-redux|@react-native-vector-icons|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/__tests__/utils/test.utils.tsx',
    '<rootDir>/src/constants/index.ts',
  ],
};
