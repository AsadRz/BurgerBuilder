import React from "react";
import BurgerIngredients from "./BurgerIngredients";
import classes from "./style.module.css";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, id) => {
        return <BurgerIngredients key={igkey + id} type={igkey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length <= 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
