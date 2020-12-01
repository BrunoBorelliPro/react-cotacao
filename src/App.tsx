import React from 'react';
import DolarFrame from './dolarFrame/dolarFrame'
import DolarCalculator from './dolarCalculator/dolarCalculator'
import money from './img/money2.png'
import './app.css'
function App() {
  return (
    <div className="App">
      <div className="dolarImage">
        <img src={money} alt=""/>
      </div>
      <DolarCalculator />
    </div>
  );
}

export default App;
