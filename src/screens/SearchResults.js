import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { PropertyList, Spinner } from 'components';
import colors from 'constants/colors';

export const SearchResults = ({ navigation }) => {
  const properties = useSelector(state => state.properties);
  const [propertiesIsLoading, setPropertiesIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [canLoadMoreProperties, setCanLoadMoreProperties] = useState(true);

  const showMorePropsBy = 5;

  useEffect(() => {
    navigation.setOptions({
      title: `${
        offset + showMorePropsBy < properties.length
          ? offset + showMorePropsBy
          : properties.length
      } of ${properties.length} matches`,
    });
  }, [offset]);

  const handleEndReach = () => {
    setCanLoadMoreProperties(properties.length - offset - showMorePropsBy > 0);
    setPropertiesIsLoading(true);
    setTimeout(() => {
      setPropertiesIsLoading(false);
      setOffset(offset + showMorePropsBy);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <PropertyList
        onEndReached={handleEndReach}
        properties={properties.slice(0, offset + showMorePropsBy)}
        canLoadMoreProperties={canLoadMoreProperties}
        propertiesIsLoading={propertiesIsLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 15,
    backgroundColor: colors.SOLITUDE,
  },
});
