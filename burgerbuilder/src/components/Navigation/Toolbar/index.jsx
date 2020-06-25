import React from "react";
import classes from "./style.module.css";
import Logo from "../../UI/Logo";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
