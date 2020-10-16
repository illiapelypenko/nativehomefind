import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import StarInactive from 'assets/icons/starInactive.svg';
import StarActive from 'assets/icons/starActive.svg';
import { COLORS } from 'constants';
import { addSpacesTo } from 'utils/formatters';

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
    removeFavorite,
    addFavorite,
    isFavorite,
  } = props;

  const StarIcon = isFavorite ? StarActive : StarInactive;

  const Star = () => (
    <Pressable
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={styles.starContainer}
    >
      <StarIcon style={styles.star} />
    </Pressable>
  );

  return (
    <Pressable style={styles.container} onPress={onPress}>
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
          kitchen and etc
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 11,
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
    borderColor: COLORS.ZIRCON,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 10,
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
    transform:
      Platform.OS === 'ios'
        ? [{ rotateZ: '-45deg' }, { translateX: -115 }, { translateY: -107 }]
        : [{ rotateZ: '-45deg' }, { translateX: -110 }, { translateY: -100 }],
    zIndex: 2,
  },
  ribbonText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    textTransform: 'capitalize',
    color: COLORS.WHITE,
  },
  starContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 12,
    zIndex: 2,
  },
  star: {
    color: COLORS.ZIRCON,
  },
  thumbnail: {
    width: 110,
    height: 110,
    marginRight: 11,
    flex: 0,
    borderRadius: 3,
  },
  info: {
    flex: 1,
    paddingVertical: 2,
  },
  title: {
    marginTop: 5,
    marginBottom: 4,
    color: COLORS.BLACK,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
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
    color: COLORS.BLACK,
  },
  description: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.BLACK,
  },
});
