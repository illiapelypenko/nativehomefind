import { http } from '../utils/request';

export const GET_PROPERTIES = 'GET_PROPERTIES';
export const CLEAR_PROPERTIES = 'CLEAR_PROPERTIES';
export const SET_CARD_SIZE = 'SET_CARD_SIZE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_ERROR = 'SET_ERROR';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_ALREADY_LAUNCHED = 'SET_ALREADY_LAUNCHED';

export function getProperties(place) {
  return async dispatch => {
    try {
      const BASE_URL = 'https://realtor.p.rapidapi.com';
      const SUGGESTIONS_URL = BASE_URL + '/locations/auto-complete';
      const suggestionUrlParams = encodeURI(`?input=${place}`);
      const suggestions = await http(SUGGESTIONS_URL, suggestionUrlParams);

      const { city, state_code } = suggestions.autocomplete[0];

      const PROPERTIES_FOR_SALE_URL = BASE_URL + '/properties/v2/list-for-sale';
      const PROPERTIES_FOR_RENT_URL = BASE_URL + '/properties/v2/list-for-rent';
      const propertiesUrlParams = encodeURI(
        `?sort=relevance&city=${city}&limit=500&offset=0&state_code=${state_code}`
      );

      const [propertiesForSale, propertiesForRent] = await Promise.all([
        http(PROPERTIES_FOR_SALE_URL, propertiesUrlParams),
        http(PROPERTIES_FOR_RENT_URL, propertiesUrlParams),
      ]);

      let properties = [
        ...propertiesForSale.properties,
        ...propertiesForRent.properties,
      ];

      properties = properties.filter(prop => {
        const {
          thumbnail,
          photos_count,
          building_size,
          prop_status,
          price,
          baths,
          beds,
          address,
        } = prop;

        return (
          (thumbnail || photos_count) &&
          building_size?.size &&
          prop_status &&
          price &&
          baths &&
          beds &&
          address.city &&
          address.neighborhood_name
        );
      });

      if (!properties.length)
        throw Error('We are sorry! We have not found any properties.');

      dispatch({
        type: GET_PROPERTIES,
        payload: properties,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
      throw Error();
    }
  };
}

export function clearProperties() {
  return {
    type: CLEAR_PROPERTIES,
  };
}

export function setCardSize(cardSize = 'standart') {
  return {
    type: SET_CARD_SIZE,
    payload: cardSize,
  };
}

export function addFavorite(property_id) {
  return {
    type: ADD_FAVORITE,
    payload: property_id,
  };
}

export function removeFavorite(property_id) {
  return {
    type: REMOVE_FAVORITE,
    payload: property_id,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

export function setAlreadyLaunched() {
  return {
    type: SET_ALREADY_LAUNCHED,
  };
}
