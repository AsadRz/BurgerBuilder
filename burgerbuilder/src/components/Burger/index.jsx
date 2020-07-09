/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredients from './BurgerIngredients';
import classes from './style.module.css';

const burger = (props) => {
  const { ingredients } = props;

  let transformedIngredients = Object.keys(ingredients)
    .map((igkey) =>
      [...Array(props.ingredients[igkey])].map((_, id) => (
        <BurgerIngredients key={igkey + id} type={igkey} />
      )),
    )
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length <= 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  // console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

burger.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ingredients: PropTypes.object.isRequired,
};

export default burger;
