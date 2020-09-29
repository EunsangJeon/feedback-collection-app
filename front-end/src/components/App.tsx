import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NoAuth from './NoAuth';
import PrivateRoute from './PrivateRoute';

const SurveyNew = () => <h2>SurveyNew</h2>;

interface IAppProps {
  fetchUser: CallableFunction;
}

class App extends Component<IAppProps> {
  componentDidMount() {
    if (Cookies.get('jwt')) {
      this.props.fetchUser();
    }
  }

  render(): JSX.Element {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/no-auth" component={NoAuth} />
            <PrivateRoute exact path="/surveys" component={Dashboard} isAuthenticated={this.authenticated()} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  authenticated(): boolean {
    return Cookies.get('jwt') ? true : false;
  }
}

export default connect(null, actions)(App);
