/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
