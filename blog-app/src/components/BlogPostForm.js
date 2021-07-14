import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

// NOTE set default props
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 18,
    margin: 5,
  },
});

export default BlogPostForm;
