import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableOpacity } from "react-native";

const SignUpPage = () => {
  const [countryCode, setCountryCode] = React.useState("+55");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const onSignUp = async () => {};

  return (
    <KeyboardAvoidingView 
        style={{flex: 1}} 
        behavior="padding" 
        keyboardVerticalOffset={keyboardVerticalOffset}
    >
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { flex: 0.2 }]}
          placeholder="Country code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          mobileNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={onSignUp}
      >
        <Text style={defaultStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in.
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
    </KeyboardAvoidingView>

  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.dark,
  },
  disabled: {
    backgroundColor: Colors.lightGray,
  },
});
