import api from '../services/api';
import { LOAD_RESTAURANTS } from './action_types';

export const loadRestaurants = (address = null, category = null) => async (dispatch) => {
  let response = await api.loadRestaurants(address, category);
  dispatch({
    type: LOAD_RESTAURANTS,
    restaurants: response.data.restaurants
  });
}

export const searchRestaurants = (search) => async (dispatch) => {
  let response = await api.searchRestaurants(search)
  dispatch({
    type: LOAD_RESTAURANTS,
    restaurants: response.data.restaurants
  });
}