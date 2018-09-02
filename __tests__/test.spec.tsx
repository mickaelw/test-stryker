import { shallow } from 'enzyme'
import * as React from 'react'
import { View } from 'react-native'
import { App } from '../src/App'

describe('setup', () => {
    it('test', () => {
        expect(true).toEqual(true)
    })

    it('component', () => {
        const app = shallow(<App/>)
        expect(app.find(View).exists()).toBeTruthy()
        expect(app).toMatchSnapshot()
    })
})
