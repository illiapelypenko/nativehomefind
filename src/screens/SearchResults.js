import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export const SearchResults = () => {
  const properties = useSelector((state) => state.properties);

  return (
    <View>
      {properties.map((property, index) => (
        <Text key={index}>{property.property_id}</Text>
      ))}
    </View>
  );
};
