/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

const input = (props) => {
  let inputElement = null;
  const { elementType, value } = props;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={classes.InputElement}
          value={value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={value}
          onChange={props.changed}
        />
      );
  }
  return <div className={classes.Input}>{inputElement}</div>;
};

input.propTypes = {
  elementType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default input;
