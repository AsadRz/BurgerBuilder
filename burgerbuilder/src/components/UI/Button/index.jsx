import React from "react";
import classes from "./style.module.css";
import clsx from "clsx";

const button = (props) => (
  <button
    className={clsx(
      classes.Button,
      // props.btnType === "Danger" ? classes.Danger : classes.Success
      classes[props.btnType] // both this and above method are correct for displaying classes for different styles of button
    )}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
