module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: [
    '<rootDir>/__tests__/utils/test.utils.tsx',
    '<rootDir>/src/constants/index.ts',
  ],
  collectCoverageFrom: [
    'src/**',
    '!src/assets/**',
    '!src/api/index.ts',
    '!src/services/user.service.ts',
    '!src/redux/**',
  ],
};
