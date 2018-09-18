import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.getTimeUntil = this.getTimeUntil.bind(this);
    this.leading0 = this.leading0.bind(this);
  }

  //async call once dom render -lifecycle
  componentWillMount() {
    //passes in deadline from parent App
    this.getTimeUntil(this.props.deadline);
    setInterval(()=> this.getTimeUntil(this.props.deadline), 1000);
  }

  //adds an extra zero to single digit numbers in the counter
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    //useing stock javascript method for date. comapres deadline to current time
    //declaring new Date just grabs the current time
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div>
        <div className='Clock-days'>{this.leading0(this.state.days)} Days</div>
        <div className='Clock-hours'>{this.leading0(this.state.hours)} Hours </div>
        <div className='Clock-minutes'>{this.leading0(this.state.minutes)} Minutes</div>
        <div className='Clock-seconds'>{this.leading0(this.state.seconds)} Seconds</div>
      </div>
    )
}


}; //end of class

export default Clock;
