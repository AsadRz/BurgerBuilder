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
    <p>
      Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>$
    </p>
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingredientsAdded(c.type)}
        remove={() => props.ingredientsRemoved(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
