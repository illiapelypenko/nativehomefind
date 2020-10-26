import {
  GET_PROPERTIES,
  CLEAR_PROPERTIES,
  SET_CARD_SIZE,
  CLEAR_ERROR,
  SET_ERROR,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
} from './actions';
import { setItem } from 'utils/asyncStorage';

const initialState = {
  properties: [],
  error: {
    message: '',
    type: '',
  },
  cardSize: 'standart',
  favorites: [],
  requestStatus: '',
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_REQUEST':
      return { ...state, requestStatus: payload };
    case GET_PROPERTIES:
      return { ...state, properties: payload };
    case CLEAR_PROPERTIES:
      return { ...state, properties: [] };
    case SET_CARD_SIZE:
      return { ...state, cardSize: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    case CLEAR_ERROR:
      return { ...state, error: initialState.error };
    case ADD_FAVORITE:
      const favorites = [
        ...state.favorites,
        state.properties.find(property => property.property_id === payload),
      ];
      setItem('favorites', favorites);

      return {
        ...state,
        favorites,
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };
    case REMOVE_FAVORITE:
      const favs = state.favorites.filter(item => item.property_id !== payload);
      setItem('favorites', favs);

      return { ...state, favorites: favs };
    default:
      return state;
  }
}

export default reducer;
