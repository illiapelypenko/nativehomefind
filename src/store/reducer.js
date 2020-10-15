import {
  GET_PROPERTIES,
  CLEAR_PROPERTIES,
  SET_CARD_SIZE,
  CLEAR_ERROR,
  SET_ERROR,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_ALREADY_LAUNCHED,
} from './actions';

const initialState = {
  properties: [],
  error: '',
  cardSize: 'standart',
  favorites: [],
  alreadyLaunched: false,
};

async function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROPERTIES:
      return { ...state, properties: payload };
    case CLEAR_PROPERTIES:
      return { ...state, properties: [] };
    case SET_CARD_SIZE:
      return { ...state, cardSize: action.payload };
    case SET_ERROR:
      console.log(action.payload);
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          state.properties.find(
            property => property.property_id === action.payload
          ),
        ],
      };
    case REMOVE_FAVORITE:
      const favorites = state.favorites.filter(
        item => item.property_id !== action.payload
      );
      return { ...state, favorites };
    case SET_ALREADY_LAUNCHED:
      return { ...state, alreadyLaunched: true };
    default:
      return state;
  }
}

export default reducer;
