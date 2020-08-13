import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';
import Logo from '../../UI/Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const navItems = [
  {
    value: 'Burger Builder',
    link: '/',
    exact: true,
  },
  {
    value: 'Orders',
    link: '/orders',
    exact: false,
  },
];

const toolbar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems items={navItems} />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default toolbar;
