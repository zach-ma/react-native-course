import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 1,
    // alignSelf: "center",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
    // borderWidth: 10,
    // borderColor: "red",
    // fontSize: 18,
    // flex: 1,
    // alignSelf: "stretch",
    // top: 10,
    // left: 10,
    ///
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    /// =>
    // ...StyleSheet.absoluteFillObject, // NOTE
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 1,
    // alignSelf: "flex-end",
  },
});

export default BoxScreen;
