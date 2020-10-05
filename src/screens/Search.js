import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Location from '../assets/location.svg';
import { getProperties, clearError } from '../store/actions';
import colors from '../constants/colors';
import { ERROR_SCREEN, SEARCH_RESULTS } from '../constants/routeNames';
import { SearchButton } from '../components/SearchButton';

export const Search = ({ navigation }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const error = useSelector((state) => state.error);

  const searchInput = useRef();

  useEffect(() => {
    if (error) navigation.navigate(ERROR_SCREEN);
  }, []);

  const handleSearch = async () => {
    // if already focused, no keyboard pop up
    if (!searchValue) return searchInput.current.focus();
    setIsLoading(true);
    setSearchValue('');
    await dispatch(getProperties(searchValue));
    setIsLoading(false);
    navigation.navigate(SEARCH_RESULTS);
    // handle error navigation
  };

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
            placeholder='Place-name or postcode'
            placeholderTextColor={colors.MIRAGE}
            ref={searchInput}
          />
          <Location style={styles.location} />
        </View>
        <SearchButton isLoading={isLoading} onPress={handleSearch} />
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
    shadowColor: colors.BLACK,
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
    color: colors.WHITE,
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 38,
    backgroundColor: colors.SOLITUDE,
  },
  tip: {
    fontSize: 18,
    lineHeight: 27,
  },
  textInputWrapper: {
    position: 'relative',
    marginTop: 27,
    marginBottom: 11,
    justifyContent: 'center',
  },
  location: {
    position: 'absolute',
    left: 18,
  },
  textInput: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.ZIRCON,
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 19,
    fontWeight: '500',
  },
});
