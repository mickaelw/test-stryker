const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { document } = (new JSDOM('', {
    url: 'http://localhost'
})).window
global.document = document
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property]
    }
})
