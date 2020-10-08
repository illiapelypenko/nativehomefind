import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { COLORS } from 'constants';

export const Favorites = () => {
  return (
    <View>
      <StatusBar backgroundColor={COLORS.FLAMINGO} hidden={false} />
      <Text>Favorites!</Text>
    </View>
  );
};
