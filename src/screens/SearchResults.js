import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PropertyList } from 'components/PropertyList';
import Back from 'assets/back.svg';
import Window from 'assets/window.svg';
import List from 'assets/list.svg';
import colors from 'constants/colors';

export const SearchResults = () => {
  const properties = useSelector(state => state.properties);
  const [propertiesShown, setPropertiesShown] = useState(5);
  const [propertiesIsLoading, setPropertiesIsLoading] = useState(false);

  const SHOW_MORE_PROPS_VALUE = 5;

  return (
    <SafeAreaView>
      <View style={styles.topPanel}>
        <View style={styles.icon}>
          <Back />
        </View>
        <Text style={styles.matches}>
          {propertiesShown} of {properties.length} matches
        </Text>
        <View style={styles.icon}>
          <Window />
        </View>
      </View>
      <View style={styles.searchResults}>
        <PropertyList properties={properties} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchResults: {
    paddingTop: 24,
    paddingHorizontal: 15,
    backgroundColor: colors.SOLITUDE,
  },
  topPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.FLAMINGO,
  },
  matches: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    color: colors.WHITE,
  },
  icon: {
    padding: 18,
  },
});
