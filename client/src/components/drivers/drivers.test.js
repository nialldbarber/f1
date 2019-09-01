import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Drivers from './index'

configure({ adapter: new Adapter() })

describe('Drivers Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<Drivers />)
    const wrapper = component.find('.drivers')
    expect(wrapper.length).toBe(1)
  })
})
