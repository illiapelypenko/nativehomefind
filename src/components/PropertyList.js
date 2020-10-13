import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, FlatList } from 'react-native';
import { PropertyCard } from './';

export const PropertyList = ({ properties }) => {
  const cardSize = useSelector(state => state.cardSize);
  const favs = useSelector(state => state.favs);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.propertyList}
      data={properties}
      extraData={favs}
      keyExtractor={item => item.property_id}
      renderItem={({ item }) => (
        <PropertyCard
          item={item}
          cardSize={cardSize}
          dispatch={dispatch}
          navigation={navigation}
          favs={favs}
        />
      )}
      onEndReachedThreshold={0}
      onEndReached={({distanceFromEnd}) => {
        console.log(distanceFromEnd)
      }}
    />
  );
};

const styles = StyleSheet.create({
  propertyList: {},
});
