/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

const input = (props) => {
  let inputElement = null;
  const { inputType, label, type, name, placeholder } = props;

  switch (inputType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className={classes.InputElement}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default input;
