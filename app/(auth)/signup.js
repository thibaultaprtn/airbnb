import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Entypo from "@expo/vector-icons/Entypo";

import logo from "../../assets/airbnb-logo.png";
import signupstyle from "../../styles/signUpStyles";

export default function Signup() {
  const signupurl =
    "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up";
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirm, setHidePasswordConfirm] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePressSubmit = async (next) => {
    if (
      email === "" ||
      username === "" ||
      description === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      setError("Please fill all the informations");
      next();
    } else if (password != passwordConfirm) {
      setError("Passwords do not match");
      next();
    }
    try {
      const response = await axios.post(signupurl, {
        email: email,
        username: username,
        description: description,
        password: password,
      });
      console.log(response.data);
      Alert.alert("Successfull Signup");
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={signupstyle.contentContainer}
      >
        <Image source={logo} style={signupstyle.logo} />
        <Text style={signupstyle.signup}>Sign up</Text>
        <TextInput
          style={signupstyle.textinput}
          autoCapitalize="none"
          placeholder="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={signupstyle.textinput}
          autoCapitalize="none"
          placeholder="username"
          value={username}
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <TextInput
          style={signupstyle.textarea}
          multiline={true}
          numberOfLines={4}
          placeholder="Describe yourself in a fex words"
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={signupstyle.textinput2}
            secureTextEntry={hidePassword}
            autoCapitalize="none"
            placeholder="password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          {hidePassword ? (
            <Entypo
              name="eye"
              size={24}
              color="#FFBAC0"
              onPress={() => {
                setHidePassword(false);
              }}
            />
          ) : (
            <Entypo
              name="eye-with-line"
              size={24}
              color="#FFBAC0"
              onPress={() => {
                setHidePassword(true);
              }}
            />
          )}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={signupstyle.textinput2}
            secureTextEntry={hidePasswordConfirm}
            autoCapitalize="none"
            placeholder="confirm password"
            value={passwordConfirm}
            onChangeText={(text) => {
              setPasswordConfirm(text);
            }}
          />
          {hidePasswordConfirm ? (
            <Entypo
              name="eye"
              size={24}
              color="#FFBAC0"
              onPress={() => {
                setHidePasswordConfirm(false);
              }}
            />
          ) : (
            <Entypo
              name="eye-with-line"
              size={24}
              color="#FFBAC0"
              onPress={() => {
                setHidePasswordConfirm(true);
              }}
            />
          )}
        </View>

        <Text style={{ display: error && "hidden" }}>{error}</Text>
        <>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Pressable
              style={signupstyle.signupbutton}
              onPress={handlePressSubmit}
            >
              <Text style={signupstyle.signupbuttontext}>Sign Up</Text>
            </Pressable>
          )}

          <Link style={signupstyle.registerredirect} href="/">
            <Text style={signupstyle.registerredirecttext}>
              Already have an account ? Log In !
            </Text>
          </Link>
        </>
      </KeyboardAwareScrollView>
    </>
  );
}
