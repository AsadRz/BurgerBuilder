import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import classes from "./style.module.css";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerTogglehandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler} />
        <SideDrawer
          closed={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
