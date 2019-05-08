import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import history from './history';
import CreateOrder from './screens/create_order';
import Home from './screens/home';
import Restaurants from './screens/restaurants';
import ShowOrder from './screens/show_order';
import ShowRestaurant from './screens/show_restaurant';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurants' component={Restaurants} />
      <Route exact path='/restaurants/:id' component={ShowRestaurant} />
      <Route exact path='/orders/new' component={CreateOrder} />
      <Route exact path='/orders/:id' component={ShowOrder} />
    </Switch>
  </Router>
)

export default Routes;