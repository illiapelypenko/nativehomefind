import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getProperties } from 'store/actions';
import { COLORS, ROUTES } from 'constants';
import { SearchButton } from 'components/Search/SearchButton';
import { SearchInput } from 'components/Search/SearchInput';

export const Search = ({ navigation }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = useRef();

  useEffect(() => {
    const preventGoingBag = e => {
      e.preventDefault();
    };

    navigation.addListener('beforeRemove', preventGoingBag);

    return navigation.removeListener('beforeRemove', preventGoingBag);
  }, [navigation]);

  const handleSearch = async () => {
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
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          ref={searchInput}
          style={{
            marginTop: 27,
            marginBottom: 11,
          }}
        />
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
    color: COLORS.BLACK,
  },
});
