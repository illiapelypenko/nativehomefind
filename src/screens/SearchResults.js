import React, { useState, useEffect } from 'react';
import {View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { PropertyList } from 'components';
import colors from 'constants/colors';

export const SearchResults = ({ navigation }) => {
  const properties = useSelector(state => state.properties);
  const [propertiesShown, setPropertiesShown] = useState(5);
  const [propertiesIsLoading, setPropertiesIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: `${propertiesShown} of ${properties.length} matches`,
    });
  }, [propertiesShown]);

  const SHOW_MORE_PROPS_VALUE = 5;

  return (
    <View style={styles.searchResults}>
      <PropertyList properties={properties} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchResults: {
    paddingTop: 24,
    paddingHorizontal: 15,
    backgroundColor: colors.SOLITUDE,
    height: '100%',
  },
});
