import List from './list'
import Option from './option'
import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import classNames from 'classnames'
import './virtualized-select.css'

const VirtualizedSelect = props => {
    return (
        <Select
            autosize
            className={classNames('virtualized-select', {
                disabled: props.isDisabled,
                required: props.isRequired,
            })}
            components={{MenuList: List}}
            defaultValue={props.value}
            formatOptionLabel={Option}
            isDisabled={props.isDisabled}
            onChange={props.onChange}
            options={props.options}
            placeholder={props.placeholder}
            value={props.value}
        />
    )
}

VirtualizedSelect.propTypes = {
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.object,
}

export default VirtualizedSelect