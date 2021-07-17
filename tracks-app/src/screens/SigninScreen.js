import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text>Signin screen</Text>
      <Button
        title=""
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
