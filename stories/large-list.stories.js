import {EXAMPLE_OPTIONS_LARGE_LIST} from './utilities/example-data'
import React from 'react'
import VirtualizedSelect from '../src/virtualized-select'
import {logOnChange} from './utilities/on-change'
import propsMarkdown from './utilities/props.md'
import {storiesOf} from '@storybook/react'

storiesOf('Virtualized Select', module).add(
    'Large List (10,000 items)',
    () => <VirtualizedSelect onChange={logOnChange} options={EXAMPLE_OPTIONS_LARGE_LIST} />,
    {
        notes: {markdown: propsMarkdown},
    }
)
