import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Title, View, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import CardButtons from '../../savings/components/card-buttons';

function GoalsCard(props) {
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
            <Text style={styles.mainNumber}>{props.value}</Text>
            <Text style={styles.goalsText}>{props.value > 0 ? 'por cumplir' : 'Añade alguna meta'}</Text>
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
    alignItems: "center"
  },
  mainNumber: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold"
  },
  goalsText: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "white",
    fontSize: 10,
    fontWeight: "600"
  }
});

export default GoalsCard;
