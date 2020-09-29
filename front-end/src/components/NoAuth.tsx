import React, { Component } from 'react';

class NoAuth extends Component {
  render(): JSX.Element {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>No Authentication</h3>
        You need to login first :(
      </div>
    );
  }
}

export default NoAuth;
