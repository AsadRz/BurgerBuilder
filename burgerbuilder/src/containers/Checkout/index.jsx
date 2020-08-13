import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../Checkout/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  // componentDidMount function is being called everytime componenet renders and extracting all the queryParams and making them
  // in checkoutSummary
  componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price }, () => {
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
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (
            <ContactData
              {...props}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
