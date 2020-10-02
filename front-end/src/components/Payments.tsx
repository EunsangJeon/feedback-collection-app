import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { STRIPE_PUBLIC_KEY } from '../config/keys';

class Payments extends Component {
  render(): JSX.Element {
    return (
      <StripeCheckout
        name="feedback collection"
        description="$5 for 5 credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
