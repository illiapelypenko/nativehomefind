import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import StarInactive from 'assets/icons/starInactive.svg';
import StarActive from 'assets/icons/starActive.svg';
import { COLORS } from 'constants';
import { addSpacesTo } from 'utils/formatters';

export const PropertyCardStandart = props => {
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
      <View style={styles.title}>
        <Text style={styles.neighborhoodName}>{neighborhood_name}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: thumbnail || photos[0].href }}
      >
        <View style={styles.highlightLine}>
          <Text style={styles.price}>{`$${addSpacesTo(price)}`}</Text>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
    borderColor: COLORS.ZIRCON,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
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
      { translateX: -155 },
      { translateY: 16 },
      { rotateZ: '-45deg' },
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
  starContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 19,
    zIndex: 2,
  },
  star: {
    color: COLORS.ZIRCON,
  },
  title: {
    marginVertical: 28,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  neighborhoodName: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  city: {
    marginTop: 2,
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.BLACK,
  },
  thumbnail: {
    width: '100%',
    height: 222,
    justifyContent: 'space-between',
  },
  highlightLine: {
    zIndex: 2,
    backgroundColor: COLORS.TRANSPARENT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price: {
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.FLAMINGO,
    paddingVertical: 6,
  },
  infoDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoDetailsValue: {
    width: 50,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    paddingVertical: 6,
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  infoDetailsText: {
    width: 50,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 13,
    paddingVertical: 4,
    color: COLORS.BLACK,
  },
});
