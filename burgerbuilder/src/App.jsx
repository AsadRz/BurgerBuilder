/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';
import Auth from './containers/Auth';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
