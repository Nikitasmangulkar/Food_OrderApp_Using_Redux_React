import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./storage";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Refer to ReadMe.md file from the application

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
