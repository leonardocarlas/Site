// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

// Guide and stack-overflow-problem 
// https://stackoverflow.com/questions/72013449/upgrading-jest-to-v28-error-test-environment-jest-environment-jsdom-cannot-be
// https://dev-yakuza.posstree.com/en/react/nextjs/test/
import '@testing-library/jest-dom/extend-expect'