import {addDecorator, addParameters, configure} from '@storybook/react'
import {host} from 'storybook-host'
import {withA11y} from '@storybook/addon-a11y'
import {withConsole} from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(
    host({
        title: 'Virtualized Select',
        align: 'center bottom',
        height: '80%',
        width: 400,
    })
)

addDecorator(withA11y)
addParameters({
    a11y: {
        // ... axe options
        element: '#root', // optional selector which element to inspect
        config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
})

configure(require.context('../stories', true, /\.stories\.js$/), module)
