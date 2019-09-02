import React from 'react';
import DayCard from './components/dayCard/DayCard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const getAllTours = () => {

    }

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
