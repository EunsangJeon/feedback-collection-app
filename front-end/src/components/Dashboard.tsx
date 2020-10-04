import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoAuth from './NoAuth';

import * as actions from '../actions';

interface IStore {
  auth: unknown;
}

interface IPropsDashboard {
  auth: unknown;
  fetchUser: () => Promise<unknown>;
}

class Dashboard extends Component<IPropsDashboard> {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContents() {
    if (this.props.auth) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>Surveys</h3>
        </div>
      );
    }
    return <NoAuth />;
  }

  render(): JSX.Element {
    return this.renderContents();
  }
}

function mapStatesToProps(state: IStore): IStore {
  return {
    auth: state.auth,
  };
}

export default connect(mapStatesToProps, actions)(Dashboard);
