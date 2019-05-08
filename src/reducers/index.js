import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import modalReducer from './modalReducer';
import newOrderReducer from './newOrderReducer';
import orderReducer from './orderReducer';
import RestaurantsReducer from './restaurantsReducer';

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  orderState: orderReducer,
  modalState: modalReducer,
  addressState: addressReducer,
  newOrderState: newOrderReducer
})