import React from "react";
import { View, Text, StatusBar } from "react-native";
import colors from "../constats/colors";

export const Favorites = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.FLAMINGO} hidden={false} />
      <Text>Favorites!</Text>
    </View>
  );
};
