import React from "react";
import { StyleSheet } from "react-native";
import { Title, View, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import CardButtons from './card-buttons';

function MainCard(props) {
  return (
    <View scrollEnabled={false} padder style={styles.mainView}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[props.initialColor, props.finalColor]}
        style={styles.linearGradient}
      >
        <Title style={styles.buttonText}>{props.title}</Title>
        <View style={styles.numberContainer}>
          <Text style={styles.mainNumber}>${props.value}</Text>
        </View>
        {
          props.buttons ?
          <CardButtons
          buttons={props.buttons}
          /> : null
        } 
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
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainNumber: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold"
  }
});

export default MainCard;
