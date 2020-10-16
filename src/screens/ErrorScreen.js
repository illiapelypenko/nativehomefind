import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderBackButton } from '@react-navigation/stack';
import SearchErrorPicture from 'assets/searchErrorPicture.png';
import FavoritesErrorPicture from 'assets/favoritesErrorPicture.png';
import { COLORS, ROUTES } from 'constants';
import { clearError } from 'store/actions';

export const ErrorScreen = ({ navigation }) => {
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={handlePress}
          tintColor={COLORS.WHITE}
          label=" "
        />
      ),
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: error.type,
    });
  }, [error.message]);

  const handlePress = () => {
    dispatch(clearError());
    navigation.navigate(ROUTES.SEARCH);
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          error.type === 'Search' ? SearchErrorPicture : FavoritesErrorPicture
        }
      />
      <Text style={styles.message}>{error.message}</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Back to search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.RAVEN,
    marginVertical: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 3,
    backgroundColor: COLORS.FLAMINGO,
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
