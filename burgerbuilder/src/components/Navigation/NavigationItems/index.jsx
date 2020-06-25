import React from "react";
import classes from "./style.module.css";
import NavigationItem from "./NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem navItems={props.items} />
  </ul>
);

export default navigationItems;
