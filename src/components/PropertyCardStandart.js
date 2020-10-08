import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PropertyCardStandart = ({ property }) => {
  const {
    property: {
      // prop_status,
      // thumbnail,
      // photos,
      // price,
      // baths,
      // beds,
      // building_size: { size },
      address: { city, neighborhood_name },
    },
    // onPropertyClick,
    // removeFav,
    // addFav,
    // propertyIsLoading,
    // isFav,
  } = property;

  return (
    <View style={styles.card}>
      <View className={styles.title}>
        <Text className={styles.neighborhoodName}>{neighborhood_name}</Text>
        <Text className={styles.city}>{city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    marginVertical: 28,
  },
  neighborhoodName: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
  },
  city: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 15,
  },
});
