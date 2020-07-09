/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';
import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
];

const buildControls = (props) => {
  const {
    totalPrice,
    ingredientsAdded,
    ingredientsRemoved,
    purchaseable,
    disabled,
    ordered,
  } = props;

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price:
        <strong>{`${totalPrice.toFixed(2)} $`}</strong>
      </p>
      {controls.map((c) => (
        <BuildControl
          key={c.label}
          label={c.label}
          added={() => ingredientsAdded(c.type)}
          remove={() => ingredientsRemoved(c.type)}
          disabled={disabled[c.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchaseable}
        onClick={ordered}
      >
        Order Now
      </button>
    </div>
  );
};

buildControls.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  ingredientsAdded: PropTypes.func.isRequired,
  ingredientsRemoved: PropTypes.func.isRequired,
  purchaseable: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  disabled: PropTypes.object.isRequired,
  ordered: PropTypes.func.isRequired,
};

export default buildControls;
