import React from "react";
import Aux from "../../../hoc/Auxilliary";
import Button from "../../UI/Button";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}:{props.ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}$</strong>
      </p>
      <p>Continue to Checkout??</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
