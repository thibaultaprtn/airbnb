import { StyleSheet } from "react-native";

export default signupstyle = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  signup: {
    color: "#717171",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
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
  textarea: {
    width: "100%",
    borderColor: "#FFBAC0",
    borderWidth: 1,
    marginVertical: 10,
    height: 100,
  },
  signupbutton: {
    marginTop: 10,
    width: 250,
    height: 70,
    borderWidth: 3,
    borderColor: "#F9585D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  signupbuttontext: {
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
