const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  globals: {
    __DEV__: true,
    __CYPRESS__: false,
    'ts-jest': {
      diagnostics: false
    }
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':
      '<rootDir>/tools/lib/fileTransformer.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  collectCoverageFrom: [
    'src/common/**/*.{tsx,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/common/mock-api/**/*.{tsx,ts}',
    '!src/common/AppRoutes/**/*.{tsx,ts}',
    '!src/common/App.tsx',
    '!src/common/AppRouteDetector.tsx'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/common/routes.tsx',
    '<rootDir>/src/common/store/configureStore.ts'
  ],
  // coveragePathIgnorePatterns: ['<rootDir>/src/common/routes.tsx'],
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
    '**/__tests__/**/*.tsx?(x)',
    '**/?(*.)+(spec|test).tsx?(x)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: ['default', 'jest-junit']
};
