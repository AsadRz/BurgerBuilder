import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

class BurgerIngredients extends Component {
  render() {
    let ingridient = null;
    const { type } = this.props;
    switch (type) {
      case 'bread-bottom':
        ingridient = <div className={classes.BreadBottom} />;
        break;
      case 'bread-top':
        ingridient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        ingridient = <div className={classes.Meat} />;
        break;

      case 'cheese':
        ingridient = <div className={classes.Cheese} />;
        break;
      case 'salad':
        ingridient = <div className={classes.Salad} />;
        break;
      case 'bacon':
        ingridient = <div className={classes.Bacon} />;
        break;
      default: {
        ingridient = null;
      }
    }
    return ingridient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
