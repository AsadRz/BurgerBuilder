import React from "react";
import classes from "./style.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingredientsAdded(c.type)}
        remove={() => props.ingredientsRemoved(c.type)}
      />
    ))}
  </div>
);

export default buildControls;
