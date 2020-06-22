import React from "react";
import BurgerIngredients from "./BurgerIngredients";
import classes from "./style.module.css";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, id) => {
      return <BurgerIngredients key={igKey + id} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
