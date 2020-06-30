import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button';

const orderSummary = (props) => {
  const {
    ingredients,
    totalPrice,
    purchaseCanceled,
    purchaseContinue,
  } = props;
  // this could be functional Component doesn't necassorily have to be class
  const ingredientsSummary = Object.keys(ingredients).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>
            {igKey}
            :
            {ingredients[igKey]}
          </span>
        </li>
      );
    },
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>
          Total Price:
          {' '}
          {totalPrice.toFixed(2)}
          $
        </strong>
      </p>
      <p>Continue to Checkout??</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
};

export default orderSummary;
