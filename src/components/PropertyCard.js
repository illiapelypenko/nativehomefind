import React, { useEffect, useState } from 'react';
import { PropertyCardMinified }  from './PropertyCardMinified';
import { PropertyCardStandart } from './PropertyCardStandart';
import { ROUTES } from 'constants';
import { addFav, removeFav } from 'store/actions';

export const PropertyCard = ({
  item,
  cardSize,
  dispatch,
  navigation,
  favs,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFav = !!favs.find(fav => fav.property_id === item.property_id);

    setIsFav(isFav);
  }, [favs]);

  const handleCardPress = () => {
    navigation.navigate(ROUTES.PROPERTY_SCREEN, { item });
  };

  const props = {
    item,
    onPress: handleCardPress,
    dispatch,
    addFav: () => dispatch(addFav(item)),
    removeFav: () => dispatch(removeFav(item)),
    isFav,
  };

  const Component =
    cardSize === 'standart' ? PropertyCardStandart : PropertyCardMinified;

  return <Component {...props} />;
};
