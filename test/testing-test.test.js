import React from 'react'
import TestingTest from '../src/testing-test'
import renderer from 'react-test-renderer'

test('Has Testing Div', () => {
    const component = renderer.create(<TestingTest/>)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})