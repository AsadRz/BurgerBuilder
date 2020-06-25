import React from "react";
import classes from "./style.module.css";
import Logo from "../../UI/Logo";
import NavigationItems from "../NavigationItems";
import Backdrop from "../../UI/Backdrop";
import Aux from "../../../hoc/Auxilliary/Auxilliary";
import clsx from "clsx";
import PropTypes from "prop-types";

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

const sideDrawer = (props) => {
  const attachedClasses = clsx(
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close
  );
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems items={navItems} />
        </nav>
      </div>
    </Aux>
  );
};

sideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};

export default sideDrawer;
