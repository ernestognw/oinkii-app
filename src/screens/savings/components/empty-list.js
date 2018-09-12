import React from 'react';
import { View } from 'native-base';
import { ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';

function EmptyList (props) {
  return (
    <View style={styles.emptyView}>
      {
        !props.loaded ?
        <ActivityIndicator size="small" color="#65A4D2" /> : 
        <View style={styles.container}>
          <Text>Por ahora no tienes registros.</Text>
          <TouchableOpacity onPress={props.buttonAction} style={{...styles.button, backgroundColor: props.color}}>
            <Text style={styles.buttonLabel}>{props.message}</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center"
  },
  emptyView: {
    marginTop: 40,
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "80%"
  },
  buttonLabel: {
    color: "white",
    padding: 12,
    fontSize: 12,
  },
});

export default EmptyList;