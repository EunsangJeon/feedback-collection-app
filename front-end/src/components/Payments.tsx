import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { STRIPE_PUBLIC_KEY } from '../config/keys';

interface IProps {
  handlePaymentToken: CallableFunction;
}

class Payments extends Component<IProps> {
  render(): JSX.Element {
    return (
      <StripeCheckout
        name="feedback collection"
        description="$5 for 5 credits"
        amount={500}
        token={(token) => this.props.handlePaymentToken(token)}
        stripeKey={STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
