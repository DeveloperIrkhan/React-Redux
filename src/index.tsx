import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from "./Components/Redux/Store/Store"
import { Provider } from 'react-redux';


ReactDOM.render(
  <div>
    <Provider store={Store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
reportWebVitals();
