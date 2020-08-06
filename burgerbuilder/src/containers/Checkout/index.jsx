import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      bacon: 1,
      salad: 1,
      meat: 1,
      cheese: 1,
    },
  };

  // componentDidMount function is being called everytime componenet renders and extracting all the queryParams and making them
  // in checkoutSummary
  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients }, () => {
      console.log(this.state.ingredients);
    });
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;
