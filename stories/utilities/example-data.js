import Chance from 'chance'

const chance = new Chance()

export const EXAMPLE_OPTIONS = [
    {
        label: 'Item 1',
        value: 1,
    },
    {
        label: 'Item 2',
        value: 2,
    },
    {
        label: 'Item 3',
        value: 3,
    },
]

export const EXAMPLE_OPTIONS_WITH_SUBTITLE = [
    {
        label: 'Item 1',
        subtitle: 'Subtitle 1',
        value: 1,
    },
    {
        label: 'Item 2',
        subtitle: 'Subtitle 2',
        value: 2,
    },
    {
        label: 'Item 3',
        subtitle: 'Subtitle 3',
        value: 3,
    },
]

export const EXAMPLE_OPTIONS_LARGE_LIST = chance.n(
    index => ({
        label: chance.name(),
        subtitle: chance.street(),
        value: index,
    }),
    10000
)
