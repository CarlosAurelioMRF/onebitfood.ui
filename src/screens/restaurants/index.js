import React, { Fragment } from 'react';

import Categories from '../../components/categories';
import ListRestaurants from '../../components/list_restaurants';

const Restaurants = () => (
  <Fragment>
    <Categories />
    <ListRestaurants />
  </Fragment>
);

export default Restaurants;