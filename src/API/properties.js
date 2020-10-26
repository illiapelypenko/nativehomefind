import { http } from '../utils/request';

export async function fetchProperties(place) {
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

  return properties;
}
