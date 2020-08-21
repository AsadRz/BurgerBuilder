export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT ';

export const addIngredient = (payload) => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: payload,
  };
};

export const removeIngredient = (payload) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: payload,
  };
};
