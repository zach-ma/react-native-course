import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" placeholder="" />
      <Spacer />
      <Input label="Password" placeholder="" />
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate("TrackList");
          }}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>Already have an account? Sign in instead</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 10,
    flex: 1, // expand the view
    justifyContent: "center",
    marginBottom: 300,
  },
});

export default SignupScreen;
