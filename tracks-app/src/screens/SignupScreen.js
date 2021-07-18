import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        placeholder=""
        value={email}
        // onChangeText={(newEmail) => {
        //   setEmail(newEmail);
        // }}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry // NOTE
        label="Password"
        placeholder=""
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={
            () => signup({ email, password })
            // navigation.navigate("TrackList");
          }
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
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default SignupScreen;
