import React from 'react'
import VirtualizedSelect from '../src/virtualized-select'
import {logOnChange} from './utilities/on-change'
import propsMarkdown from './utilities/props.md'
import {storiesOf} from '@storybook/react'

storiesOf('Virtualized Select', module).add(
    'No Content',
    () => <VirtualizedSelect onChange={logOnChange} options={[]} />,
    {
        notes: {markdown: propsMarkdown},
    }
)
