import React, { Component } from "react";
import Aux from "../../../hoc/Auxilliary";
import Button from "../../UI/Button";

class OrderSummary extends Component {
  //this could be functional Component doesn't necassorily have to be class

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey}:{this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious Burger with following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}$</strong>
        </p>
        <p>Continue to Checkout??</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
