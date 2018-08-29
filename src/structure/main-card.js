import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "native-base";
import LinearGradient from "react-native-linear-gradient";

function MainCard(props) {
  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[props.initialColor, props.finalColor]}
        style={styles.linearGradient}
      >
        <Title style={styles.buttonText}>{props.title}</Title>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 20
  },
  mainView: {
    height: 250,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    height: "50%",
    backgroundColor: "transparent"
  }
});

export default MainCard;
