import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackList screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
