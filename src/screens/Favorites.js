import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PropertyList } from 'components';
import { COLORS } from 'constants';
import { setError } from 'store/actions';

export const Favorites = ({ navigation }) => {
  const favorites = useSelector(state => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', checkFavoritesLength);
  }, []);

  useEffect(() => {
    checkFavoritesLength();
  }, [favorites]);

  const checkFavoritesLength = () => {
    if (!favorites.length)
      dispatch(
        setError(
          'You have not added any properties to your favourites.',
          'Favorites'
        )
      );
  };

  return (
    <View style={styles.container}>
      <PropertyList properties={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 15,
    backgroundColor: COLORS.SOLITUDE,
    height: '100%',
  },
});
