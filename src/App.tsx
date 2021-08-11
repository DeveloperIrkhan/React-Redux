import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Inputpage } from './Components/InputPage';
import { Provider, useSelector } from 'react-redux'
function App() {
  return (
    <React.StrictMode>
        <div className="App container p-5">
          <Inputpage addNote={alert} />
        </div>
    </React.StrictMode>
  );
}

export default App;
