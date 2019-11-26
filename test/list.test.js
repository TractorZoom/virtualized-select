import React from 'react'
import List from '../src/list'
import renderer from 'react-test-renderer'

test('List when empty', () => {
    const component = renderer.create(<List children={[]} getValue={() => []} options={[]} />)
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('List when less than 6 options', () => {
    const childrenAndOptions = ['first child', 'second child']
    const component = renderer.create(
        <List children={childrenAndOptions} getValue={() => []} options={childrenAndOptions} />
    )
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('List when value set and option found', () => {
    const childrenAndOptions = ['first child', 'second child']
    const component = renderer.create(
        <List children={childrenAndOptions} getValue={() => ['first option']} options={childrenAndOptions} />
    )
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

test('List when value set and option not found', () => {
    const childrenAndOptions = [
        'first child',
        'second child',
        'third child',
        'fourth child',
        'fifth child',
        'sixth child',
        'seventh child',
    ]
    const component = renderer.create(
        <List children={childrenAndOptions} getValue={() => ['some other option']} options={childrenAndOptions} />
    )
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})
