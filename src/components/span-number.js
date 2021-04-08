import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SpanNumber extends Component {

    render() {
        const { value } = this.props;
        return <span>{value}</span>;
    }
}

SpanNumber.propTypes = {
    value: PropTypes.number.isRequired,
}
