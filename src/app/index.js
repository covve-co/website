import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('app')
);
