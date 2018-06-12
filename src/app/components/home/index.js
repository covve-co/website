import React from 'react';
import HomeButton from '../home-button/';
import waves from './waves.svg';
import logo from './logo.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flex: 5, flexDirection: 'row' }}>
        <div
          class="home-left"
          style={{ flex: 2, display: 'flex', flexDirection: 'column' }}
        >
          <img class="logo" src={logo} alt="this no work" />
          <br />
          <HomeButton link="/about" title="About" />
          <HomeButton link="/work" title="Work" />
          <HomeButton link="/contact" title="Contact" />
          <HomeButton link="/contact" title="Contact" />
        </div>
        <div class="home-right" style={{ flex: 1 }}>
          <img class="waves" src={waves} alt="this no work" />
        </div>
      </div>
    );
  }
}
