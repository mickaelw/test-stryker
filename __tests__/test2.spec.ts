import { test } from '../src/test'

describe('setup', () => {
    it('test', () => {
        const calc = test(10, 10)
        expect(calc).toEqual(20)
    })
})
