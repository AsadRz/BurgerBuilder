import React from "react";
import Aux from "../../hoc/Auxilliary";
import classes from "./style.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div>ToolBar SideBar Drawer</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
