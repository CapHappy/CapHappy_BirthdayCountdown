import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from'./clock';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  renderItems(){
    if (this.state.active){
      return[
        <Clock/>
      ]
    }else{
      return[
        Button('Generate countdown', () => this.setState({ active: true }))
      ]
    }
  }bind(this)

  render() {
    // return(<div><Clock/></div>)

    return (
      <div className="grid">
        <h1 className="grid__tittle">BirthdayCountdown</h1>

        <div className="grid__skew-light-one"></div>
        {/* <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>
        <div className="grid__skew-dark-one"></div> */}
        <div className="grid__skew-dark-two-box"></div>

        <Picker/>
        {this.renderItems}
        
      </div>
    );
  }
}
