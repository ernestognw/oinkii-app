import React from 'react';
import { View } from 'native-base';
import { ActivityIndicator, Text, StyleSheet } from 'react-native';

function EmptyList (props) {
  return (
    <View style={styles.emptyView}>
      {
        !props.loaded ?
        <ActivityIndicator size="small" color="#65A4D2" /> : 
        <Text>Por ahora no tienes registros :(</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  emptyView: {
    marginTop: 40,
    alignItems: "center",
  }
});

export default EmptyList;