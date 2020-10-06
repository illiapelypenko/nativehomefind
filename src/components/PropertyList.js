import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { PropertyCard } from './PropertyCardStandart';

export const PropertyList = ({ properties }) => {
  return (
    <FlatList style={styles.propertyList}>
      {properties.map(property => (
        <PropertyCard property={property} />
      ))}
    </FlatList>
  );
};

const styles = StyleSheet.create({
  propertyList: {},
});
