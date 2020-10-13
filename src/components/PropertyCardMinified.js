import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import StarInactive from 'assets/icons/starInactive.svg';
import StarActive from 'assets/icons/starActive.svg';
import { COLORS } from 'constants';
import { addSpacesTo } from 'utils/utils';

export const PropertyCardMinified = props => {
  const {
    item: {
      prop_status,
      thumbnail,
      photos,
      price,
      baths,
      beds,
      building_size: { size },
      address: { city, neighborhood_name },
    },
    onPress,
    removeFav,
    addFav,
    isFav,
  } = props;

  const Star = () => (
    <Pressable onPress={isFav ? removeFav : addFav} style={styles.starWrapper}>
      {isFav ? (
        <StarActive style={styles.star} />
      ) : (
        <StarInactive style={styles.star} />
      )}
    </Pressable>
  );

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.ribbon}>
        <Text style={styles.ribbonText}>{prop_status.slice(4)}</Text>
      </View>
      <Star />
      <Image
        style={styles.thumbnail}
        source={{ uri: thumbnail || photos[0].href }}
      />
      <View style={styles.info}>
        <Text style={styles.price}>{`$${addSpacesTo(price)}`}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {neighborhood_name}, &nbsp;{city}
        </Text>
        <View style={styles.infoDetails}>
          <Text style={styles.infoDetailsText}>{baths} baths, </Text>
          <Text style={styles.infoDetailsText}>{beds} beds, </Text>
          <Text style={styles.infoDetailsText}>{size} area</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          It’s a spacious house with two large bedrooms, a living room, a large
          kit...
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 11,
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
    borderColor: COLORS.ZIRCON,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  ribbon: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 32,
    backgroundColor: COLORS.FLAMINGO,
    transform: [
      { rotateZ: '-45deg' },
      { translateX: -110 },
      { translateY: -100 },
    ],
    zIndex: 2,
  },
  ribbonText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    textTransform: 'capitalize',
    color: COLORS.WHITE,
  },
  starWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  star: {
    color: COLORS.ZIRCON,
  },
  thumbnail: {
    width: 110,
    height: 110,
    marginRight: 11,
    flex: 0
  },
  info: {
    flex: 1
  },
  title: {
    marginTop: 7,
    marginBottom: 4,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.FLAMINGO,
  },
  infoDetails: {
    flexDirection: 'row',
  },
  infoDetailsText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 7,
  },
  description: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 18,
  },
});
