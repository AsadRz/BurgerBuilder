import React from "react";
import classes from "./style.module.css";
import clsx from "clsx";

const button = (props) => (
  <button
    className={clsx(
      classes.Button,
      props.btnType === "Danger" ? classes.Danger : classes.Success
    )}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
