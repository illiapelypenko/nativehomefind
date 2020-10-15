import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Location from 'assets/icons/location.svg';
import { getProperties } from 'store/actions';
import { COLORS, ROUTES } from 'constants';
import { SearchButton } from 'components';

export const Search = ({ navigation }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = useRef();

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);

  const handleSearch = async () => {
    // if already focused, no keyboard pop up
    try {
      if (!searchValue) return searchInput.current.focus();
      setIsLoading(true);
      setSearchValue('');
      await dispatch(getProperties(searchValue));
      setIsLoading(false);
      navigation.navigate(ROUTES.SEARCH_RESULTS);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.tip}>
          Use the form below to search for houses to buy. You can search by
          place-name, post- code, or click “My location”, to search in your
          current location.
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="Place-name or postcode"
            placeholderTextColor={COLORS.MIRAGE}
            ref={searchInput}
          />
          <Location style={styles.location} />
        </View>
        <SearchButton isLoading={isLoading} onPress={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.FLAMINGO,
  },
  topPanelText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    color: COLORS.WHITE,
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 38,
    backgroundColor: COLORS.SOLITUDE,
  },
  tip: {
    fontSize: 18,
    lineHeight: 27,
  },
  textInputContainer: {
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
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.ZIRCON,
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 19,
    fontWeight: '500',
  },
});
