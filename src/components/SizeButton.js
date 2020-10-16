import React from 'react';
import { Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Window from 'assets/icons/window.svg';
import List from 'assets/icons/list.svg';
import { setCardSize } from 'store/actions';
import { setItem } from 'utils/asyncStorage';

export const SizeButton = () => {
  const size = useSelector(state => state.cardSize);
  const dispatch = useDispatch();

  const handlePress = () => {
    const value = size === 'standart' ? 'minified' : 'standart';
    dispatch(setCardSize(value));
    setItem('size', value);
  };

  return (
    <Pressable onPress={handlePress}>
      {size === 'standart' ? <List /> : <Window />}
    </Pressable>
  );
};
