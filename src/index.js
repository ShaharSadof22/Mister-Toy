import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store/store'

// import './assests/css/main.css';
import './styles/global.scss';


import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
