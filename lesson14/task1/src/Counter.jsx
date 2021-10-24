import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div class="counter">
        <button class="counter__button">-</button>
        <span class="counter__value">17</span>
        <button class="counter__button">+</button>
      </div>
    );
  }
}
