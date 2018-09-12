import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Title, View, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import CardButtons from "./card-buttons";

function MainCard(props) {
  let ints = Math.floor(props.value);
  let cents = (props.value - ints) * 100;
  cents = cents == 0 ? '00' : cents.toFixed(0)

  return (
    <View scrollEnabled={false} padder style={styles.mainView}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[props.initialColor, props.finalColor]}
        style={styles.linearGradient}
      >
        <Title style={styles.buttonText}>{props.title}</Title>
        {
          !props.dataLoaded ?
          <View style={styles.numberContainer}>
            <ActivityIndicator size="small" color="white"/>
          </View> :
          <View style={styles.numberContainer}>
            <Text style={styles.moneySign}>$</Text>
            <Text style={styles.mainNumber}>{props.value ? ints : '0'}</Text>
            <Text style={styles.cents}>.{props.value ? cents : '00'}</Text>
          </View>
        }
        {props.buttons ? <CardButtons buttons={props.buttons} /> : null}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  mainView: {
    height: 200,
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
    marginTop: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  mainNumber: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"
  },
  moneySign: {
    fontSize: 0,
    color: "white",
    marginRight: 5
  },
  cents: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "white",
    marginTop: 15,
  }
});

export default MainCard;
