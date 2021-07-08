import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        // onEndEditing={() => onTermSubmit()}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 15,
    flexDirection: "row",
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center", // NOTE sometimes better than alignChild
    marginHorizontal: 12,
  },

  inputStyle: {
    // NOTE testing trick: add border!
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1, // NOTE takes up as much space as possible
    fontSize: 18,
  },
});

export default SearchBar;
