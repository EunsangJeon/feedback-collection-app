import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import * as actions from '../actions';

interface IStore {
  auth: unknown;
}

interface IPropsDashboard {
  auth: unknown;
  fetchUser: () => Promise<unknown>;
}

class Landing extends Component<IPropsDashboard> {
  componentDidMount() {
    if (Cookies.get('jwt')) {
      this.props.fetchUser();
    }
  }

  render(): JSX.Element {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>feedback collection</h3>
        Collect and get insight from user surveys!
      </div>
    );
  }
}

function mapStatesToProps(state: IStore): IStore {
  return {
    auth: state.auth,
  };
}

export default connect(mapStatesToProps, actions)(Landing);
