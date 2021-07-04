import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>
        {title} - Image Score {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ImageDetail;
