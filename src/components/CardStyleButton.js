import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Window from 'assets/icons/window.svg';
import List from 'assets/icons/list.svg';
import { setCardSize } from 'store/actions';

export const CardStyleButton = () => {
  const cardSize = useSelector(state => state.cardSize);
  const dispatch = useDispatch();

  const handlePress = () => {
    const value = cardSize === 'standart' ? 'minified' : 'standart'
    dispatch(setCardSize(value));
  };

  const ViewIcon = () => cardSize === 'standart' ? <Window /> : <List />

  return (
    <Pressable style={styles.btn} onPress={handlePress}>
      <ViewIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  },
});
