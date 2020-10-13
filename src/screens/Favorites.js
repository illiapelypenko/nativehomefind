import React from 'react';
import {View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { PropertyList } from 'components';
import colors from 'constants/colors';

export const Favorites = () => {
  const favs = useSelector(state => state.favs);

  return (
    <View style={styles.Favorites}>
      <PropertyList properties={favs} />
    </View>
  );
};

const styles = StyleSheet.create({
  Favorites: {
    paddingTop: 24,
    paddingHorizontal: 15,
    backgroundColor: colors.SOLITUDE,
    height: '100%',
  },
});
