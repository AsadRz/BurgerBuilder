import React from 'react';
import classes from './style.module.css';

const backDrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backDrop;
