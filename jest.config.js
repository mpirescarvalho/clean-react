module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: { 
    '.*\\.(ts|tsx)$': 'ts-jest',
    "^.+\\.svg$": "jest-transform-stub"
   },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
