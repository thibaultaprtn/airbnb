import { useState, useEffect } from "react";
import axios from "axios";
import Entypo from "@expo/vector-icons/Entypo";

import {
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";

import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//href -> destination de navigation / push -> ajout nouvel écran à pile navigation / replace -> remplace l'écran actuel dans l'historique de nav

import logo from "../../assets/airbnb-logo.png";
import signinstyle from "../../styles/signInStyles";

export default function Home() {
  const loginurl =
    "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hidepassword, sethidepassword] = useState(true);
  const [error, setError] = useState("");

  const handlePressSubmit = async (next) => {
    setError("");
    if (email === "") {
      setError("Please enter an email");
      next();
    } else if (password === "") {
      setError("Please enter a password");
      next();
    }
    try {
      const response = await axios.post(loginurl, {
        email: email,
        password: password,
      });
      console.log(response.data);
      Alert.alert("Successfull Login");
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    setError("");
  }, [email, password]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={signinstyle.contentContainer}
    >
      <Image source={logo} style={signinstyle.logo} />
      <Text style={signinstyle.signin}>Sign in</Text>
      <TextInput
        style={signinstyle.textinput}
        autoCapitalize="none"
        placeholder="email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={signinstyle.textinput2}
          secureTextEntry={hidepassword}
          autoCapitalize="none"
          placeholder="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        {hidepassword ? (
          <Entypo
            name="eye"
            size={24}
            color="#FFBAC0"
            onPress={() => {
              sethidepassword(false);
            }}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={24}
            color="#FFBAC0"
            onPress={() => {
              sethidepassword(true);
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
            style={signinstyle.signinbutton}
            onPress={handlePressSubmit}
          >
            <Text style={signinstyle.signinbuttontext}>Sign In</Text>
          </Pressable>
        )}

        <Link style={signinstyle.registerredirect} href="/signup">
          <Text style={signinstyle.registerredirecttext}>
            No Account ? Register
          </Text>
        </Link>
      </>
    </KeyboardAwareScrollView>
  );
}
