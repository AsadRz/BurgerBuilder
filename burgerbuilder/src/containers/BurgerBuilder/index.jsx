import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.8,
  meat: 1,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    // console.log(this.props);
    axios
      .get('https://burger-builder-a4e40.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
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

  purchaseContinueHandler = async () => {
    // creating queryParams using encodeURIComponent on this.state.ingredeients joining with query string and
    //sending it via history props
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i]),
      );
    }
    queryParams.push('price=' + this.state.totalPrice);

    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    // console.log(this.state.loading);

    // console.log(this.state.totalPrice);

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
