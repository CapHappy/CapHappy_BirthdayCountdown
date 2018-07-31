import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from'./clock';
import changeDate from './changeDate';
import largeText from './largeText';
import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.timer =0

    this.state = {
      active: false,
      startDate: moment(),
      timeRemaning: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  }

  handleChange =function(date) {
    clearTnterval(this.timer);
    this.setState({
        startDate: date
    });
  }.bind(this)

  handleGenerate = function() {
    this.setState({ active: true })

    var bday = this.state.startDate.todate();
    var today= new Date();
    var currentMonth = today.getMonth();
    var birthMonth = bday.getMonth();

    if (birthMonth > currentMonth) {
      bday.setFullYear(today.getFullYear())
    }else if (birthMonth < currentMonth) {
      bday.setFullYear(today.getFullYear()+1)
    }else if (birthMonth == currentMonth) {
      var currentDay = today.getDate();
      var birthDay = bday.getDate();

      if (birthDay>currentDay){
        bday.setFullYear(today.getFullYear())
      }else if (birthDay<=currentDay){
        bday.setFullYear(today.getFullYear()+1)
      }
    }

    //Set the date we-re counting down to
    var countDownDate = bday.getTime();

    //update date every second
    this.timer = setInterval(function(){

      //get todays date and time
      var now =today.getTime();

      //Find the distance between now an the count down date
      var distance = countDownDate - now;

      //time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
      var seconds =Math.floor((distance % ( 1000*60))/1000);

      //output the result in an element with id="demo"
      const time = days + "d " + hours + "h " +minutes + "m " + seconds+ "s ";
      const timeRemaning = {
        days,
        hours,
        minutes,
        seconds
      }
      this.setState({ timeRemaning})

      //If the countdown is over, write some text
      if (distance < 0) {
        clearTnterval(this.timer);
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }.bind(this), 1000);
  }.bind(this)

  renderItems(){
    if (this.state.active){
      return[
          <Clock timeRemaning={this.state.timeRemaning}/>,
        changeDate('Change Date', ()=> this.setState({ active: false })),
        largeText('04/03'),
        <label className="grid__remaning">Remaining until your 21st birthday</label>
      ]
    }else{
      return[
        <Picker startDate={this.state.startDate} callback={(date)=>this.handleChange(date)}/>,
        Button('Generate countdown', () => this.handleGenerate())
      ]
    }
  }bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid__tittle">BirthdayCountdown</h1>

        <div className="grid__skew-light-one"></div>
        {/* <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>
        <div className="grid__skew-dark-one"></div> */}
        <div className="grid__skew-dark-two-box"></div>
        {this.renderItems}
        
      </div>
    );
  }
}
