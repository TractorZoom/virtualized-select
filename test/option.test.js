import React from 'react'
import Option from '../src/option'
import renderer from 'react-test-renderer'

test('Option with no subtitle', () => {
    const component = renderer.create(<Option label='some label' value='some value' />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('Option with subtitle', () => {
    const component = renderer.create(<Option label='some label' subtitle='some subtitle' value='some value' />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
