import React from 'react';
import DolarFrame from './dolarFrame/dolarFrame'
import DolarCalculator from './dolarCalculator/dolarCalculator'
function App() {
  return (
    <div className="App">
      <h1>Claramente é um app de cotação do dólar!</h1>
      <DolarFrame />
      <DolarCalculator />
    </div>
  );
}

export default App;
