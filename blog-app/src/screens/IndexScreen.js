import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context, Provider } from "../context/BlogContext";
// import {Context as BlogContext, Provider}from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context); // access the value from context

  return (
    <View>
      <Text>index screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
