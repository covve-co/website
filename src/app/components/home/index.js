import React from 'react';
import { Route, Switch } from 'react-router';
import BrowserRouter from 'react-router-dom';
import HomeButton from '../home-button/';
import About from '../about/';
import Contact from '../contact';
import Work from '../work';
import logo from './logo.svg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container">
        <div class="home-left">
          <a
            style={{
              flex: 1
            }}
            href="/"
          >
            <img class="logo" src={logo} />
          </a>
          <div class="menu-wrapper">
            <HomeButton link="/about" title="About" />
            <HomeButton link="/work" title="Work" />
            <HomeButton link="/contact" title="Contact" />
          </div>
        </div>
        <div class="home-right">
          <div class="canvas">
            <main>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
