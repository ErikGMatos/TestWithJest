import React, { Component } from 'react';

// import { Container } from './styles';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Você tem {this.props.count * 2} counters.</h2>
      </div>
    );
  }
}
