import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { COLORS } from 'constants';

export const PropertyCardStandart = props => {
  const {
    property: {
      prop_status,
      thumbnail,
      photos,
      price,
      baths,
      beds,
      building_size: { size },
      address: { city, neighborhood_name },
    },
    // onPropertyClick,
    // removeFav,
    // addFav,
    // propertyIsLoading,
    // isFav,
  } = props;

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.neighborhoodName}>{neighborhood_name}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: thumbnail || photos[0].href }}
      >
        <View style={styles.highlightLine}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.highlightLine}>
          <Text style={styles.infoDetailsValue}>{baths}</Text>
          <Text style={styles.infoDetailsValue}>{beds}</Text>
          <Text style={styles.infoDetailsValue}>{size}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoDetails}>
        <Text style={styles.infoDetailsText}>Baths</Text>
        <Text style={styles.infoDetailsText}>Beds</Text>
        <Text style={styles.infoDetailsText}>Area</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    marginVertical: 28,
    alignItems: 'center',
  },
  neighborhoodName: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.BLACK,
  },
  city: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.BLACK,
  },
  thumbnail: {
    width: '100%',
    height: 222,
  },
  highlightLine: {
    zIndex: 2,
  },
  infoDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoDetailsText: {
    width: 50,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 13,
    paddingVertical: 4,
  },
});
