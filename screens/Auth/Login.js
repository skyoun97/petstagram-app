import React from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
`;

export default () => {
  const emailInput = useInput("");
  const handleLogin = () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder={"Email"}
          keyboardType={"email-address"}
          autoCorrect={false}
          autoCapitalize={"none"}
          onEndEditing={handleLogin}
        />
        <AuthButton text={"Login"} onPress={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
};
