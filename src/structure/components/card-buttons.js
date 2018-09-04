import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text, Icon } from "native-base";

function CardButtons(props) {
  return (
    <View style={styles.container}>
      {props.buttons.map((item,index) => {
        return (
          <TouchableOpacity key={index} onPress={item.buttonAction} style={styles.button}>
            <Text style={styles.buttonLabel}>
              <Icon type="Entypo" style={styles.buttonIcon} name={item.icon} />
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row", 
    width: "100%" 
  },
  button: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    flex: 1
  },
  buttonLabel: {
    padding: 12,
    color: "white",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center"
  },
  buttonIcon: {
    color: "white",
    fontSize: 12
  }
});

export default CardButtons;
