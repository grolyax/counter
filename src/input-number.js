import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputNumber extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this); //привязали метод к компоненту, иначе не разглядитp
    }
    handleChange(event) {
        const { onChange } = this.props;
        onChange(parseInt(event.target.value));
      }

    render() {
        const { value } = this.props;
        return <input value={value} onChange={this.handleChange}></input>;
    }
}

InputNumber.propTypes = {
    value: PropTypes.number.isRequired,
}
