import React, { Component } from 'react';
import { BACKEND_URL } from '../config/keys';

class Header extends Component {
  render(): JSX.Element {
    return (
      <nav>
        <div className="nav-wrapper blue lighten-1">
          <a className="left brand-logo">feedback collection</a>
          <ul className="right">
            <li>
              <a href={`${BACKEND_URL}/auth/google`}>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
