module.exports = config => {
    config.set({
        packageManager: 'yarn',
        testRunner: 'jest',
        jest: {
            projectType: 'react-ts',
            config: require('./jest.config.js')
        },
        mutator: 'typescript',
        tsconfigFile: 'tsconfig.json',
        transpilers: [],
        reporters: [
            'html',
            'clear-text',
            'progress',
            'dashboard'
        ],
        coverageAnalysis: 'off',
        mutate: [
            'src/**/*.ts'
        ]
    })
}
