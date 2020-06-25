import React from "react";
import Aux from "../../hoc/Auxilliary";
import classes from "./style.module.css";
import Toolbar from "../../components/Navigation/Toolbar";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
