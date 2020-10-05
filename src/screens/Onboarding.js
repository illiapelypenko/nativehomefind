import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  StatusBar,
  useWindowDimensions,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Logo from '../assets/logo.svg';
import colors from '../constants/colors';
import { TAB_NAVIGATOR } from '../constants/routeNames';

const slides = [
  {
    text: 'Convenient mobile application for easy properties search',
    bgSource: require('../assets/onboardingBgs/onb1.jpg'),
  },
  {
    text: 'Buy and sell your property right here and right now!',
    bgSource: require('../assets/onboardingBgs/onb2.jpg'),
  },
  {
    text: 'Thanks to us, thousands of buyers and sellers have become happy',
    bgSource: require('../assets/onboardingBgs/onb3.jpg'),
  },
  {
    text: 'Register and find out what your dream home looks like!',
    bgSource: require('../assets/onboardingBgs/onb4.jpg'),
  },
];

export const Onboarding = ({ navigation }) => {
  const activeSlideScaleX = new Animated.Value(1);
  const inactiveSlideScaleX = new Animated.Value(2.5);

  const viewportWidth = useWindowDimensions().width;

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevActiveSlide, setPrevActiveSlide] = useState(null);

  useEffect(() => {
    Animated.timing(activeSlideScaleX, {
      toValue: 2.5,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    Animated.timing(inactiveSlideScaleX, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [activeSlide]);

  const handleOnSnapToItem = (index) => {
    setPrevActiveSlide(activeSlide);
    setActiveSlide(index);
  };

  const renderSlide = ({ item, index }) => (
    <View style={styles.slide}>
      <ImageBackground source={item.bgSource} style={styles.background} />
      <Logo style={styles.logo} />
      <Text style={styles.secondaryText}>{item.text}</Text>
      {index === slides.length - 1 && (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(TAB_NAVIGATOR)}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}
    </View>
  );

  const Dot = ({ index }) => (
    <Animated.View
      style={[
        index === activeSlide ? styles.dot : styles.inactiveDot,
        {
          transform: [
            {
              scaleX:
                index === activeSlide
                  ? activeSlideScaleX
                  : index === prevActiveSlide
                  ? inactiveSlideScaleX
                  : 1,
            },
          ],
        },
      ]}
    ></Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Carousel
        data={slides}
        renderItem={renderSlide}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={handleOnSnapToItem}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotElement={<Dot />}
        inactiveDotElement={<Dot />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  slide: {
    backgroundColor: colors.BLACK,
    height: '100%',
    justifyContent: 'center',
    zIndex: 3,
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFill,
    opacity: 0.7,
  },
  logo: {
    marginBottom: 13,
    zIndex: 2,
  },
  secondaryText: {
    color: colors.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    zIndex: 2,
    width: '80%',
    marginBottom: 42,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    backgroundColor: colors.WHITE,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: colors.WHITE,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 56,
    borderRadius: 3,
    backgroundColor: colors.WHITE,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.FLAMINGO,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
