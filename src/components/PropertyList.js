import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { PropertyCard } from './PropertyCard/PropertyCard';
import { Spinner } from 'components/Spinner';
import { ROUTES } from 'constants';
import { addFavorite, removeFavorite } from 'store/actions';

export const PropertyList = ({
  properties,
  canLoadMoreProperties,
  propertiesIsLoading,
  onEndReached = () => {},
}) => {
  const cardSize = useSelector(state => state.cardSize);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const endReachedThreshold = 0.05;

  const handleCardPress = item => {
    navigation.navigate(ROUTES.PROPERTY_SCREEN, { item });
  };

  const isFavorite = item =>
    ~favorites.findIndex(favorite => favorite.property_id === item.property_id);

  return (
    <FlatList
      data={properties}
      keyExtractor={item => item.property_id}
      renderItem={({ item }) => (
        <PropertyCard
          item={item}
          cardSize={cardSize}
          addFavorite={() => dispatch(addFavorite(item.property_id))}
          removeFavorite={() => dispatch(removeFavorite(item.property_id))}
          navigation={navigation}
          isFavorite={isFavorite(item)}
          onPress={() => handleCardPress(item)}
        />
      )}
      onEndReachedThreshold={endReachedThreshold}
      onEndReached={onEndReached}
      ListFooterComponent={
        canLoadMoreProperties && (
          <Spinner propertiesIsLoading={propertiesIsLoading} />
        )
      }
    />
  );
};
