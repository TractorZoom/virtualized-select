# @tractorzoom/virtualized-select

React virtualized select element using react-window

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://tractorzoom.github.io/virtualized-select/)

[![Publish Status](https://github.com/TractorZoom/virtualized-select/workflows/publish/badge.svg)](https://github.com/TractorZoom/virtualized-select/actions) [![PR Verify Status](https://github.com/TractorZoom/virtualized-select/workflows/pull_request_verify/badge.svg)](https://github.com/TractorZoom/virtualized-select/actions)

[Live Examples with Storybook](https://tractorzoom.github.io/virtualized-select/)

## Install

To download make sure the Tractor Zoom GitHub org has been added to your projects `.npmrc` file:

```
registry=https://registry.npmjs.org // if you were currently using npm
@tractorzoom:registry=https://npm.pkg.github.com
```

Then:

```
npm i --save @tractorzoom/virtualized-select
```

## Usage

```
import React from 'react'
import VirtualizedSelect from '@tractorzoom/virtualized-select'

const MyComponent = () => (
    <VirtualizedSelect
        onChange={(selectedItem) => console.log('selectedItem: ', selectedItem)}
        options={[{
            label: 'Item 1',
            value: 1,
        }, {
            label: 'Item 2',
            value: 2,
        }, {
            label: 'Item 3',
            value: 3,
        }]}
    />
)

export default MyComponent
```

### Virtualized Select Props

| value       | required | description                                                                        |
| ----------- | -------- | ---------------------------------------------------------------------------------- |
| isDisabled  | no       | bool value that disables select element                                            |
| isRequired  | no       | bool value that when enabled add red required border to select                     |
| onChange    | yes      | function called when selection changes                                             |
| options     | yes      | list of options for select                                                         |
| placeholder | no       | string to display inside select when no current selection; defaults to `Select...` |
| value       | no       | object that matches the `Option` object that is selected                           |

### Option Props

| value    | required | description                              |
| -------- | -------- | ---------------------------------------- |
| label    | yes      | string displayed in drop down            |
| subtitle | no       | string displayed as subtext in drop down |
| value    | yes      | identifier for option                    |

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines below before getting started.

### Code Style

We use Prettier with pre-commit hooks to format the majority of our code style preferences.

### Committing

We use commitlint to ensure our commit messages are consistent and semantic. Commitlint is enable through a pre-commit hook with `husky`. For assistance with making commit messages that abide by our configuration, use `npm run commit` to step through the commitizen wizard to commit staged changes.

### Storybook

We use [Storybook](https://github.com/storybookjs/storybook) to create our examples for our component. If you are adding or editing props to the `VirtualizedSelect` component, ensure that you have added or updated any stories effected to document the functionality of the component.

### Testing

Using [Jest](https://github.com/facebook/jest) for testing. Prefer the use of Jest Snapshots and [react-test-renderer](https://reactjs.org/docs/test-renderer.html).

```
npm run test
```

