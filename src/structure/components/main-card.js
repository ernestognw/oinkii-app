import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Title, View, Button, Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";

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
          <TouchableOpacity
            onPress={() => console.log('hola mundo')}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>
              Agregar
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonLabel: {
    padding: 10,
    color: 'white',
    fontSize: 12,
  },
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
