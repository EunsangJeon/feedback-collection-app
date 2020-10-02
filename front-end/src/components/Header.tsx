import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { BACKEND_URL } from '../config/keys';
import Payments from './Payments';

interface IHeaderProps {
  auth: unknown;
}

class Header extends Component<IHeaderProps> {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <a href={`${BACKEND_URL}/auth/google`}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="payments">
            <Payments />
          </li>,
          <li key="logout">
            <a href={`${BACKEND_URL}/auth/logout`}>Logout</a>
          </li>,
        ];
    }
  }

  render(): JSX.Element {
    return (
      <nav>
        <div className="nav-wrapper blue lighten-1">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            feedback collection
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state: IHeaderProps): IHeaderProps {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
