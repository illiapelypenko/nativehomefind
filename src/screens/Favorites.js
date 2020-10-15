import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { PropertyList } from 'components';
import colors from 'constants/colors';

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

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
    backgroundColor: colors.SOLITUDE,
    height: '100%',
  },
});
