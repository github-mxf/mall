module.exports = {
  // a set of global variables that need to be available in all test environments
  // globals: {
  //   'ts-jest': {
  //     tsConfig: 'tsconfig.spec.json',
  //     isolatedModules: true, // disable type-checking when run test
  //   },
  // },
  // a preset that is used as a base for Jest's configuration. A preset should point to an npm module that has a jest-preset.json or jest-preset.js file at the root
  // preset: 'ts-jest',
  // test environment: jsdom(default),node
  testEnvironment: 'jsdom',
  // codes run before set up the testing environment
  // setupFiles: ['<rootDir>/__test__/__setupFiles/globals.js', '<rootDir>/__test__/__setupFiles/i18n.js'],
  // where coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,ts,vue}', '!**/*.d.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'vue'],
  // transforming source files
  transform: {
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    // '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    // '^.+\\.(tsx?)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  // node_module will not be transformed by default, you can add paths here to ignore or not.
  transformIgnorePatterns: ['node_modules/(?!(babel-preset-stage-2/lib/.*)|(vue/dist/.*))'],
  // module path alias
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^api/(.*)$': '<rootDir>/src/api/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^base/(.*)$': '<rootDir>/src/base/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^router/(.*)$': '<rootDir>/src/router/$1',
  },
  // match files to be tested
  testMatch: ['**/__test__/**/(*.)+(spec|test).[jt]s?(x)'],
  // set the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: 'http://localhost:8088',
  // default timeout of a test in milliseconds
  testTimeout: 50000,
  // automatically clear mock calls and instances before every test. Equivalent to calling jest.clearAllMocks() before each test
  clearMocks: true,
};
