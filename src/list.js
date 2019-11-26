import AutoSizer from 'react-virtualized-auto-sizer'
import {FixedSizeList} from 'react-window'
import PropTypes from 'prop-types'
import React from 'react'

const ROW_HEIGHT = 40

const List = props => {
    const {options, children, getValue} = props
    const [value] = getValue()
    let initialOffset = 0

    if (value && children.length > 6) {
        const foundOption = options.filter(option => option.value === value.value || option.label === value.label)

        if (foundOption.length > 0) {
            initialOffset = options.indexOf(foundOption[0]) * ROW_HEIGHT
        }
    }

    return (
        <div className='auto-sized-menu'>
            <AutoSizer>
                {({height, width}) => {
                    return (
                        <FixedSizeList
                            height={height}
                            itemCount={children.length}
                            itemSize={ROW_HEIGHT}
                            initialScrollOffset={initialOffset}
                            width={width}
                        >
                            {({index, style}) => <div style={style}>{children[index]}</div>}
                        </FixedSizeList>
                    )
                }}
            </AutoSizer>
        </div>
    )
}

List.propTypes = {
    children: PropTypes.array.isRequired,
    getValue: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}

export default List
