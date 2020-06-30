import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.8,
  meat: 1,
};

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state={
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
    }
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // if (sum > 0) {
    //   this.setState({ purchaseable: !this.state.purchaseable });
    // }
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    // console.log("in here");
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    this.setState({ ingredients: updatedIngredients });
    const basePrice = this.state.totalPrice;
    const newPrice = INGREDIENTS_PRICE[type] + basePrice;
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
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
      this.updatePurchaseState(updatedIngredients);
    } else {
      return;
    }
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You May Continue");
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    // console.log(this.state.totalPrice);

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
