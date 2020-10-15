import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing, View } from 'react-native';
import LoadingIconBig from 'assets/icons/loadingIconBig.svg';

export const Spinner = ({ propertiesIsLoading }) => {
  useEffect(() => {
    if (propertiesIsLoading) animatedLoop.start();
    else animatedLoop.stop();
  }, [propertiesIsLoading]);

  const animatedValue = new Animated.Value(0);

  const animatedLoop = Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    })
  );

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    propertiesIsLoading && (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <LoadingIconBig />
        </Animated.View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
});
