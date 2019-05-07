import { combineReducers } from 'redux';

import AddressReducer from './addressReducer';
import ModalReducer from './modalReducer';
import RestaurantsReducer from './restaurantsReducer';

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: ModalReducer,
  addressState: AddressReducer
})