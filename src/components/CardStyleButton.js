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
    dispatch(setCardSize(cardSize === 'standart' ? 'minified' : 'standart'));
  };

  return (
    <Pressable style={styles.btn} onPress={handlePress}>
      {cardSize === 'standart' ? <Window /> : <List />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
  },
});
