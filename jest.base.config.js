module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../../setupJest.ts'],
  coverageDirectory: '<rootDir>/../../coverage/ngx-toast-app/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 80,
    },
  },
};
