import React, { useEffect } from 'react';
import { Pressable, Animated, Easing, StyleSheet, Text } from 'react-native';
import LoadingIconSmall from 'assets/icons/loadingIconSmall.svg';
import { COLORS } from 'constants';

export const SearchButton = ({ isLoading, onPress }) => {
  const animatedValue = new Animated.Value(0);

  const animatedLoop = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    })
  );

  useEffect(() => {
    if (isLoading) animatedLoop.start();
    else animatedLoop.stop();
  }, [isLoading]);

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {isLoading ? (
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <LoadingIconSmall />
        </Animated.View>
      ) : (
        <Text style={styles.buttonText}>Search</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 3,
    backgroundColor: COLORS.FLAMINGO,
    paddingVertical: 15,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
