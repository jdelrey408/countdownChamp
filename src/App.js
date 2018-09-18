import React, { Component } from 'react';
import Clock from './Clock';
import { Form, Button } from 'reactstrap';
import './App.css';

//STATE
//note the deadine above has an initial value, but newDeadline is an empty strign meaning it can be updated state
//1. create an onchange event for input. In this section we take the empty string newDeadline and add an event.target.value which will allow us to put a new input.
//2. Then we updated changeDeadine(). We update the setState to deadline which is our original value and equal it with this.state.newDeadline which was an empty string BUT we updated it in the onChange below.
//3. Then with the button we call the changeDeadine method.
//4. the value should change in the {this.state.deadine} which is lcoated in the title


//PROPS
//props send data(parent state) to child components
//using this.[props creates a marker that auto changes when you update the original aprent state ]
//Start by adding the state to the component in this case <Clock>
//Keep in mind we ONLY PASSED deadline so that's the only thing that shows up in Clock props
//go to Clock.js and use this.props to pass the data

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
    this.changeDeadine = this.changeDeadine.bind(this);
  }

  changeDeadine() {
    //updates the first state with the second state
    this.setState({deadline: this.state.newDeadline})
    }


  render() {
      return (
        <div className='App'>
          <div className='App-title'>Countdown to {this.state.deadline}</div>
          <Clock
            deadline = {this.state.deadline}
           />
          <Form className='Form'>
            <input
              className='Input'
              placeholder='new date'
              onChange={event => this.setState({newDeadline: event.target.value})} />
            <Button className='Button' onClick={this.changeDeadine} color="danger" size="lg">Submit</Button>
          </Form>
        </div>

      );
    }
  }; //end of class

export default App;
