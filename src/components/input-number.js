import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputNumber extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this); //привязали метод к компоненту, иначе не разглядитp
    }
    handleChange(event) {
        const { onChange, value: number, min, max } = this.props;

        const { value } = event.target;

        const parsedValue = parseInt(value, 10);
        if (Number.isNaN(parsedValue)) {
            onChange('');
            return;
        }
        if (min && max) {
            if (parsedValue > max || parsedValue < min) {
                onChange(number);

                return;
            }
        }
        
        onChange(parsedValue);
    }

    render() {
        const { value } = this.props;
        return <input value={value} onChange={this.handleChange}></input>;
    }
}

InputNumber.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
