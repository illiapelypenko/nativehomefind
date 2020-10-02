import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const ErrorScreen = () => {
  const error = useSelector((state) => state.error);

  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};
