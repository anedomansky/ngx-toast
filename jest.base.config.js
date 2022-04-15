module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../../setupJest.ts'],
  coverageDirectory: '<rootDir>/../../target/ngx-toast-app/coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 80,
    },
  },
};
