import { Provider } from 'react-redux'
import App from './components';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './api/reducers/index';
import './styles/core.css';
import { WeeksProvider } from './contexts/weeks';

ReactDOM.render(<Provider store={store}>
  <WeeksProvider>
    <App />
  </WeeksProvider>
</Provider>, document.getElementById('root'));
