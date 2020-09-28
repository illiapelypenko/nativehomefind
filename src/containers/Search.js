import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import Location from "../assets/location.svg";
import SearchLoop from "../assets/searchLoop.svg";
import Star from "../assets/star.svg";
import colors from "../constats/colors";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView style={styles.page}>
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
            placeholder='Place-name or postcode'
            placeholderTextColor={colors.MIRAGE}
          />
          <Location style={styles.location} />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </View>
      <View style={styles.navigation}>
        <Pressable style={styles.navigationButton}>
          <SearchLoop />
        </Pressable>
        <Pressable style={styles.navigationButton}>
          <Star />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    position: "relative",
    height: "100%",
    backgroundColor: colors.FLAMINGO,
  },
  topPanel: {
    alignItems: "center",
    padding: 18,
    // shadow not working on android, only top shadow on ios
    shadowColor: "#000",
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
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 24,
    color: "white",
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 38,
    backgroundColor: "#F9FAFB",
  },
  tip: {
    fontSize: 18,
    lineHeight: 27,
  },
  textInputWrapper: {
    position: "relative",
    marginTop: 27,
    marginBottom: 11,
  },
  location: {
    position: "absolute",
    left: 18,
    top: 27,
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.ZIRCON,
    borderRadius: 3,
    paddingHorizontal: 40,
    paddingVertical: 19,
    // font-weight 500 not working
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    height: 56,
    borderRadius: 3,
    backgroundColor: colors.FLAMINGO,
    paddingVertical: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  navigationButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
});
