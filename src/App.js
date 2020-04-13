import React from 'react';
import './App.css';
import Kpi from './Kpi.js'

function App() {
  return (
      <div style={{ height: '100vh',backgroundColor: '#EEEEEE' }}>
        <div style={{ paddingTop: 100, paddingLeft: 100}}>
          <Kpi />
        </div>
      </div>
  );
}

export default App;
