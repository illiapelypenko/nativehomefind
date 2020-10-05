import React, { useEffect } from 'react';
import { Pressable, Animated, Easing, StyleSheet, Text } from 'react-native';
import LoadingIconSmall from 'assets/loadingIconSmall.svg';
import colors from 'constants/colors';

export const SearchButton = ({ isLoading, onPress }) => {
  const animation = new Animated.Value(0);

  const animationLoop = Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    })
  );

  useEffect(() => {
    if (isLoading) animationLoop.start();
    else animationLoop.stop();
  }, [isLoading]);

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 3,
    backgroundColor: colors.FLAMINGO,
    paddingVertical: 15,
  },
  buttonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
