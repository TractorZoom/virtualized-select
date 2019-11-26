import React from 'react'
import VirtualizedSelect from '../src/virtualized-select'
import renderer from 'react-test-renderer'

test('Virtualized Select only required props', () => {
    const component = renderer.create(<VirtualizedSelect onChange={() => {}} options={[]} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('Virtualized Select with optional props', () => {
    const options = ['first child', 'second child']
    const component = renderer.create(
        <VirtualizedSelect
            isDisabled={true}
            isRequired={true}
            onChange={() => {}}
            options={options}
            placeholder='some placeholder'
            value={{
                label: 'some label',
                value: 'some value',
            }}
        />
    )
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
