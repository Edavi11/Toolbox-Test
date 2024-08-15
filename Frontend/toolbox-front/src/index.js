import './index.css';
import App from './App';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/files/:fileName" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
);

reportWebVitals();
