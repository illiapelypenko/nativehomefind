import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { PropertyList } from 'components';
import { COLORS } from 'constants';
import { setError } from 'store/actions';

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      if (!favorites.length)
        dispatch(
          setError(
            'You have not added any properties to your favourites.',
            'Favorites'
          )
        );
    }, [favorites])
  );

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
