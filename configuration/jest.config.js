module.exports = {
    preset: 'react-native',
    rootDir: '..',
    setupFiles: [
        '<rootDir>/configuration/jest.setup.js'
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
        '\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '<rootDir>/__tests__/**/?(*.)+(spec|test).ts?(x)'
    ],
    testPathIgnorePatterns: [
        '\\.snap$',
        '<rootDir>/node_modules/'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/__tests__/'
    ],
    coverageDirectory: '<rootDir>/jest/coverage',
    coverageReporters: [
        'html',
        'text',
        'text-summary'
    ]
}