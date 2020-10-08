import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { PropertyCard } from './PropertyCard';

export const PropertyList = ({ properties }) => {
  return (
    <FlatList
      style={styles.propertyList}
      data={properties}
      keyExtractor={item => item.property_id}
      renderItem={PropertyCard}
    />
  );
};

const styles = StyleSheet.create({
  propertyList: {},
});
