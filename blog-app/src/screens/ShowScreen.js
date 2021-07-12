import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam("id");

  const blogPost = state.find((post) => post.id === id);

  return (
    <View>
      <Text>{blogPost.title} </Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ShowScreen;
