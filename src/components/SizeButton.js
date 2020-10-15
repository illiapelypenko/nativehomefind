import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Window from 'assets/icons/window.svg';
import List from 'assets/icons/list.svg';
import { setCardSize } from 'store/actions';

export const SizeButton = () => {
  const size = useSelector(state => state.cardSize);
  const dispatch = useDispatch();

  const handlePress = () => {
    const value = size === 'standart' ? 'minified' : 'standart';
    dispatch(setCardSize(value));
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {size === 'standart' ? <Window /> : <List />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    padding: 20,
  },
});
