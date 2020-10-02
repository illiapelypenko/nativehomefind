import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Location from '../assets/location.svg';
import LoadingIcon from '../assets/loadingIconSmall.svg';
import { getProperties, clearError } from '../store/actions';
import colors from '../constats/colors';

export const Search = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [propertiesIsLoading, setPropertiesIsLoading] = useState(false);
  const error = useSelector(state => state.error);
  const properties = useSelector(state => state.properties);
  const dispatch = useDispatch();
  const searchInput = useRef();

  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [animation]);

  useEffect(() => {
    if (error) navigation.navigate('ErrorScreen');
  }, []);

  const handleSearch = async () => {
    // if already focused, no keyboard pop up
    if (!searchValue) return searchInput.current.focus();
    setPropertiesIsLoading(true);
    setSearchValue('');
    await dispatch(getProperties(searchValue));
    setPropertiesIsLoading(false);
    navigation.navigate('SearchResults');
    // handle error navigation
  };

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={colors.FLAMINGO} hidden={false} />
      <View style={styles.topPanel}>
        <Text style={styles.topPanelText}>Search</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.tip}>
          Use the form below to search for houses to buy. You can search by
          place-name, post- code, or click “My location”, to search in your
          current location.
        </Text>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="Place-name or postcode"
            placeholderTextColor={colors.MIRAGE}
            ref={searchInput}
          />
          <Location style={styles.location} />
        </View>
        <Pressable style={styles.button} onPress={handleSearch}>
          {propertiesIsLoading ? (
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <LoadingIcon />
            </Animated.View>
          ) : (
            <Text style={styles.buttonText}>Search</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.FLAMINGO,
  },
  topPanel: {
    alignItems: 'center',
    padding: 18,
    // shadow not working on android, wrong shadow on ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
    backgroundColor: colors.FLAMINGO,
  },
  topPanelText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    color: 'white',
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 38,
    backgroundColor: '#F9FAFB',
  },
  tip: {
    fontSize: 18,
    lineHeight: 27,
  },
  textInputWrapper: {
    position: 'relative',
    marginTop: 27,
    marginBottom: 11,
  },
  location: {
    position: 'absolute',
    left: 18,
    top: 27,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.ZIRCON,
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 19,
    fontWeight: '500',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 3,
    backgroundColor: colors.FLAMINGO,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
});
