import React, { Component } from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: getTimeWithOffset(props.offset).toLocaleTimeString(),
    };
    // do not use this way
    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset).toLocaleTimeString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;