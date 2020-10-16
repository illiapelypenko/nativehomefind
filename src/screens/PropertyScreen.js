import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS } from 'constants';
import { addSpacesTo } from 'utils/formatters';

export const PropertyScreen = ({ route, navigation }) => {
  const {
    prop_status,
    thumbnail,
    photos,
    price,
    baths,
    beds,
    building_size: { size },
    address: { city, neighborhood_name },
  } = route.params.item;

  useEffect(() => {
    navigation.setOptions({
      title: `${city} & ${neighborhood_name}`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.infoDetails}>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{prop_status.slice(4)}</Text>
        </View>
        <Text style={styles.infoDetailsText}>Baths: {baths}&nbsp;</Text>
        <Text style={styles.infoDetailsText}>Beds: {beds}&nbsp;</Text>
        <Text style={styles.infoDetailsText}>Area: {size}&nbsp;</Text>
      </View>
      <Image
        style={styles.thumbnail}
        source={{ uri: thumbnail || photos[0].href }}
      />
      <View style={styles.mainInfo}>
        <Text style={styles.title}>
          {neighborhood_name}, {city}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$${addSpacesTo(price)}`}</Text>
        </View>
      </View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        It’s a spacious house with two bedrooms, a living room, a large kitchen,
        two bathrooms and a store room. There are breathtaking views of the
        mountains from all the windows. It has a large balcony, which is ideal
        for eating outside in the summer. The house has wooden floor, a Jacuzzi,
        cable television, and Internet.
      </Text>
      <Text style={styles.descriptionText}>
        It’s a quiet, safe neighbourhood and the neighbours are very warm and
        friendly. The house is walking distance from stores and restaurants in
        the local town and a short drive ...
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 27,
    paddingHorizontal: 15,
  },
  infoDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  statusContainer: {
    borderRadius: 3,
    backgroundColor: COLORS.FLAMINGO,
    paddingVertical: 6,
    paddingHorizontal: 22,
    marginRight: 10,
  },
  status: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    textTransform: 'capitalize',
  },
  infoDetailsText: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
    paddingHorizontal: 10,
  },
  thumbnail: {
    height: 218,
    borderRadius: 10,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 27,
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 20,
    marginRight: 20,
    color: COLORS.BLACK,
  },
  priceContainer: {
    backgroundColor: COLORS.FLAMINGO,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.WHITE,
  },
  descriptionTitle: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 16,
    color: COLORS.BLACK,
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 10,
    color: COLORS.BLACK,
  },
  learnMore: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.FLAMINGO,
  },
});
