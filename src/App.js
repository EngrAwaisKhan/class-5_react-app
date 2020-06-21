import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import countercontext from './CounterContext.js';

function App() {
  let countState = useState(0);
  return (
    <countercontext.Provider value = {countState}>
      <Parent/>
    </countercontext.Provider>
  );
}

export default App;
