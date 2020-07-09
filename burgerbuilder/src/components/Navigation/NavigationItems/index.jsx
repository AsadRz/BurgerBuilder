import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => {
  const { items } = props;
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem navItems={items} />
    </ul>
  );
};

navigationItems.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};

export default navigationItems;
