import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableHightlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Location from '../assets/location.svg';
import SearchLoop from '../assets/searchLoop.svg';
import Star from '../assets/star.svg';
import colors from '../constats/colors';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.FLAMINGO} />
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
          />
          <Location style={styles.location} />
        </View>
        <TouchableWithoutFeedback style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.navigation}>
        <TouchableWithoutFeedback style={styles.navigationButton}>
          <SearchLoop />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.navigationButton}>
          <Star />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    height: '100%',
  },
  topPanel: {
    backgroundColor: colors.FLAMINGO,
    alignItems: 'center',
    padding: 18,
    // shadow not working
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
  },
  topPanelText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    color: 'white',
  },
  main: {
    paddingHorizontal: 15,
    paddingTop: 38,
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
    // font-weight 500 not working
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    width: 345,
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
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  navigationButton: {
    width: 100,
    paddingVertical: 15,
    backgroundColor: 'red',
  },
});
