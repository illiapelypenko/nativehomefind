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
import LogoArrow from '../assets/arrowRight.svg';
import colors from '../constats/colors';

export const Onboarding = ({ navigation }) => {
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

  const bigger = new Animated.Value(1);
  const smaller = new Animated.Value(2.5);

  const viewportWidth = useWindowDimensions().width;

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevActiveSlide, setPrevActiveSlide] = useState(null);

  const handleOnSnapToItem = slideIndex => {
    setPrevActiveSlide(activeSlide);
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    Animated.timing(bigger, {
      toValue: 2.5,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    Animated.timing(smaller, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [activeSlide]);

  const slide = ({ item, index }) => (
    <View style={styles.slide}>
      <ImageBackground source={item.bgSource} style={styles.background} />
      <View style={styles.logo}>
        <LogoArrow style={styles.logoArrow} />
        <Text style={styles.logoText}>Homefind</Text>
      </View>
      <Text style={styles.secondaryText}>{item.text}</Text>
      {index === slides.length - 1 && (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('TabNavigator')}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}
    </View>
  );

  const ActiveDot = (
    <Animated.View
      style={[styles.dot, { transform: [{ scaleX: bigger }] }]}
    ></Animated.View>
  );

  function InactiveDot({ index }) {
    return (
      <Animated.View
        style={[
          styles.inactiveDot,
          index === prevActiveSlide ? { transform: [{ scaleX: smaller }] } : {},
        ]}
      ></Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Carousel
        data={slides}
        renderItem={slide}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={handleOnSnapToItem}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotElement={ActiveDot}
        inactiveDotElement={<InactiveDot />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  slide: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    zIndex: 3,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  logoArrow: {
    paddingRight: 6,
    zIndex: 2,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 38,
    lineHeight: 45,
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
    padding: 12,
  },
  secondaryText: {
    color: 'white',
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
    backgroundColor: 'white',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 345,
    height: 56,
    borderRadius: 3,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.FLAMINGO,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
