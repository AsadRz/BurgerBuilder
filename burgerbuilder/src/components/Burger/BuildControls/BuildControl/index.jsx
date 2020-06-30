import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.module.css';

const buildControl = (props) => {
  const {
    label,
    remove,
    disabled,
    added,
  } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        onClick={remove}
        disabled={disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default buildControl;
