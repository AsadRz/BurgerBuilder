import React from "react";
import BurgerLogo from "../../../assets/images/original.png";
import classes from "./style.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
