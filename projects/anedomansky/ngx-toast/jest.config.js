const baseConfig = require('../../../jest.base.config');
module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>/../../../setupJest.ts'],
  coverageDirectory: '<rootDir>/../../../target/ngx-toast/coverage/',
};
