import React, { Component } from 'react';
import Button from './button.js';
import InputNumber from './input-number.js';
import PropTypes from 'prop-types';

import './App.css';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    };

    this.handleChange = this.handleChange.bind(this); //привязали метод к компоненту, иначе не разглядит
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(delta) {
    this.setState({
      number: this.state.number + delta,  //создали изменяющуюся переменную
    });
  }

  handleInputChange(value) {
    this.setState({
      number: value,  
    });
  }

  render() {
    const { min, max } = this.props;
    const { number } = this.state;
    return (
      <div className="App">
        <Button onClick={this.handleChange} buttonText="-" delta={-1} disabled={number <= min} />

        <InputNumber onChange={this.handleInputChange} value={number} />

        <Button onClick={this.handleChange} buttonText="+" delta={1} disabled={number >= max} />
      </div>
    );
  }
}

Counter.defaultProps = {
  min: undefined,
  max: undefined,
};


Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}

export default Counter;
