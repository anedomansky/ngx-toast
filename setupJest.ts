import 'jest-preset-angular/setup-jest';

afterEach(() => {
  // Check if the test has any assertions
  // testing asynchronous code can lead to false positive tests which means that it can happen
  // that the test passes successfully independently of the expected result
  // read https://www.pluralsight.com/guides/test-asynchronous-code-jest for a detailed description
  expect.hasAssertions();
});
