import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './style.module.css';

const navigationItem = (props) =>
  props.navItems.map((item) => {
    return (
      <li className={classes.NavigationItem} key={item.value}>
        <NavLink
          to={item.link}
          exact={props.exact}
          activeClassName={classes.active}
        >
          {item.value}
        </NavLink>
      </li>
    );
  });

export default navigationItem;
