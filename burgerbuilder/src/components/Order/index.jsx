/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable guard-for-in */
import React from 'react';
import classes from './style.module.css';

const order = (props) => {
  const { ingredients, price } = props;
  const newIngredients = [];

  for (const ingredientName in ingredients) {
    newIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientOutput = newIngredients.map((ig) => {
    return (
      <span key={ig.name}>
        {ig.name}({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>
        Ingredients:
        {ingredientOutput}
      </p>
      <p>
        Price:
        <strong>
          USD
          {price}
        </strong>
      </p>
    </div>
  );
};

export default order;
