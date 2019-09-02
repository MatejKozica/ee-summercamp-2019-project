import React from 'react';
import DayCard from './components/dayCard/DayCard';
import axios from 'axios';
import './App.css';

const API = 'localhost:5000/api/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    }
    this.getAllTours = this.getAllTours.bind(this);
  }

  getAllTours = () => {
    axios.get(`${API}tours`)
      .then(function (response) {
        this.setState({ tours: response });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    this.getAllTours();
    return (
      <div className='app'>
        <DayCard date='09-01-2019'></DayCard>
        <DayCard date='09-02-2019'></DayCard>
        <DayCard date='09-03-2019'></DayCard>
        <DayCard date='09-04-2019'></DayCard>
        <DayCard date='09-05-2019'></DayCard>
        <DayCard date='09-06-2019'></DayCard>
        <DayCard date='09-07-2019'></DayCard>
      </div>
    )
  }
}

export default App;
