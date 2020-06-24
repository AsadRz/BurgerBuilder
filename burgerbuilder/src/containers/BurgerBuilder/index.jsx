import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.8,
  meat: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 1,
  };

  addIngredientHandler = (type) => {
    console.log("in here");
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    this.setState({ ingredients: updatedIngredients });
    const basePrice = this.state.totalPrice;
    const newPrice = INGREDIENTS_PRICE[type] + basePrice;
    this.setState({ totalPrice: newPrice });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedCount;
      this.setState({ ingredients: updatedIngredients });
      const basePrice = this.state.totalPrice;
      const newPrice = basePrice - INGREDIENTS_PRICE[type];
      this.setState({ totalPrice: newPrice });
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
