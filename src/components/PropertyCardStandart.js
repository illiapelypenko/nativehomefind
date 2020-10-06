import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PropertyCardStandart = ({ property }) => {
  return (
    <View style={styles.card}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 14,
  },
});
