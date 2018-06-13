import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
