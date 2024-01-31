import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
      apiResponse: '',
      day:'',
      month: '',
      year: ''
    };
  }

  handleButtonClick = async() => {
    const response = await API.getAPIResponse();
    const res = await response.json();
    const result = res.date;
    const temp = result.split("-")
    this.setState({day : temp[1], month: temp[0], year: temp[2]});
  }

  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickHandler={this.handleButtonClick}></DateButton></center>
        <DateDisplay day={this.state.day} month ={this.state.month} year = {this.state.year}></DateDisplay>
      </div>
    );
  }
}

export default App;
