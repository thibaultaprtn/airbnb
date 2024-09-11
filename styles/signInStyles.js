import { StyleSheet } from "react-native";

export default signinstyle = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  signin: {
    color: "#717171",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 80,
  },
  textinput: {
    height: 30,
    width: "100%",
    border: "none",
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  textinput2: {
    height: 30,
    flex: 1,
    border: "none",
    borderBottomColor: "#FFBAC0",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  signinbutton: {
    marginTop: 100,
    width: 250,
    height: 70,
    borderWidth: 3,
    borderColor: "#F9585D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  signinbuttontext: {
    fontSize: 20,
    color: "#717171",
  },
  registerredirect: {
    marginTop: 20,
  },
  registerredirecttext: {
    color: "#717171",
  },
});
