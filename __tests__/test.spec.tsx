import { shallow } from 'enzyme'
import * as React from 'react'
import { View } from 'react-native'
import { App } from '../src/App'
import { test } from '../src/test'

describe('setup', () => {
    it('test', () => {
        const calc = test(10, 10)
        expect(calc).toEqual(20)
    })

    it('component', () => {
        const app = shallow(<App/>)
        expect(app.find(View).exists()).toBeTruthy()
        expect(app).toMatchSnapshot()
    })
})
