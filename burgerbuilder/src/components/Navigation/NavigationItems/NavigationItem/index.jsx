import React from "react";
import classes from "./style.module.css";

const navigationItem = (props) =>
  props.navItems.map((item) => {
    return (
      <li className={classes.NavigationItem} key={item.value}>
        <a href={item.link} className={item.active ? classes.active : null}>
          {item.value}
        </a>
      </li>
    );
  });

export default navigationItem;
