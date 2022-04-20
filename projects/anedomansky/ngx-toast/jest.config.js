const baseConfig = require('../../../jest.base.config');
module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>/../../../setupJest.ts'],
  coverageDirectory: '<rootDir>/../../../target/ngx-toast/coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/lib/ngx-toast.module.ts',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/lib/**/*.ts',
  ],
};
