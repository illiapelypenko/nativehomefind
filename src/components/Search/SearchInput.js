import React, { forwardRef } from 'react';
import { StyleSheet, Platform, View, TextInput } from 'react-native';
import Location from 'assets/icons/location.svg';
import { COLORS } from 'constants';

export const SearchInput = forwardRef(
  ({ searchValue, setSearchValue, style }, ref) => {
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="Place-name or postcode"
          placeholderTextColor={COLORS.MIRAGE}
          ref={ref}
        />
        <Location style={styles.location} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    paddingVertical: Platform.OS === 'ios' ? 20 : 13,
    fontWeight: '500',
  },
});
