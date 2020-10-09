import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PropertyList } from 'components/PropertyList';
import Back from 'assets/back.svg';
import Window from 'assets/window.svg';
import List from 'assets/list.svg';
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
