import React from 'react';

export default class About extends React.Component {
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  render() {
    return (
      <div>
        <h1> About us </h1>
        <p>
          We're a group of Singapore-based developers who love to build awesome
          products.
        </p>
      </div>
    );
  }
}

class Employee extends React.Component {
  render() {
    return <p> Employeet </p>;
  }
}
