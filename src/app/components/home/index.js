import React from 'react';
import { Route, Switch } from 'react-router';
import BrowserRouter from 'react-router-dom';
import HomeButton from '../home-button/';
import About from '../about/';
import Contact from '../contact';
import Work from '../work';

import waves from './waves.svg';
import logo from './logo.svg';
import { isAbsolute } from 'path';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      leftState: 'home-left left-retract'
    };
  }
  _onMouseEnter(e) {
    this.setState({
      leftState: 'home-left left-extend'
    });
  }
  _onMouseLeave(e) {
    this.setState({
      leftState: 'home-left left-retract'
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 5, flexDirection: 'row' }}>
        <div
          class={this.state.leftState}
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={this._onMouseEnter.bind(this)}
          onMouseLeave={this._onMouseLeave.bind(this)}
        >
          <img class="logo" style={{ flex: 1 }} src={logo} />
          <div class="menu-wrapper" style={{ flex: 5 }}>
            <HomeButton link="/about" title="About" />
            <HomeButton link="/work" title="Work" />
            <HomeButton link="/contact" title="Contact" />
            {/* <HomeButton link="/contact" title="Contact" /> */}
          </div>
        </div>
        <div class="home-right" style={{ flex: 5 }}>
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
