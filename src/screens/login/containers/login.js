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
import { store } from "../../../redux/store";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../../../actions/actions";

class Login extends Component {

  facebookLogin = async () => {
    await this.props.actions.handleLoginAsync();
    if (!this.props.isNewUser){
      this.props.navigation.navigate("App");
    } else {
      this.props.navigation.navigate("Walkthrough")
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

function mapStateToProps(state) {
  return {
    isNewUser: state.AppReducer.isNewUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)