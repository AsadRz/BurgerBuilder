import React from "react";
import classes from "./style.module.css";
import Logo from "../../UI/Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const navItems = [
  {
    value: "Burger Builder",
    link: "/",
    active: true,
  },
  {
    value: "Checkout",
    link: "/",
    active: false,
  },
];

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems items={navItems} />
    </nav>
  </header>
);

export default toolbar;
