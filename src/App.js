import React from 'react';
import './App.css';
import Table from './components/Table'


function App() {
  return (
    <div className="App">
      <Table robotPosition={[1, 1, "SOUTH"]} />
    </div>
  );
}

export default App;
