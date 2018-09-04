import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon
} from "native-base";
import firebase from "react-native-firebase";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import store from "../../../redux/store";

class Login extends Component {

  facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions([
        "public_profile",
        "email"
      ]);

      if (result.isCancelled) {
        throw new Error("User cancelled request"); // Handle this however fits the flow of your app
      }

      console.log(
        `Login success with permissions: ${result.grantedPermissions.toString()}`
      );

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error(
          "Something went wrong obtaining the users access token"
        ); // Handle this however fits the flow of your app
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      // login with credential
      const currentUser = await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);

      store.dispatch({
        type: "SET_USER_DATA",
        payload: {
          userData: currentUser.user
        }
      });

      this.props.navigation.navigate("App");

      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image
            source={require("../../../../assets/loading-screen.png")}
            style={styles.logo}
          />
          <TouchableOpacity
            onPress={this.facebookLogin}
            style={styles.button}
            primary
          >
            <Text style={styles.buttonLabel}>
              <Icon
                style={styles.buttonIcon}
                type="EvilIcons"
                name="sc-facebook"
              />
              Iniciar con Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 90,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5
  },
  buttonLabel: {
    color: "#6E4F94",
    padding: 14,
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonIcon: {
    color: "#6E4F94",
    fontSize: 14
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6E4F94"
  }
});
export default Login;
