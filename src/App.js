import React from 'react';
import './App.css';
import TemperatureCalculator from './temperatureCalculator/TemperatureCalculator'
import Clock from './time/Clock'
import Timer from './time/Timer'

function App() {
  return (
    <div className="App">
      <TemperatureCalculator />
      <Clock/>
      <Timer/>      
    </div>
  );
}

export default App;
